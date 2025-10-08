import { PrismaClient } from '../../generated/prisma';
import { Attendance, Employee } from '../../types';
import { AttendanceData, AttendanceReport } from './types';

const prisma = new PrismaClient();

export class AttendanceService {
  async createAttendance(data: AttendanceData): Promise<Attendance & { employe: Employee }> {
    console.log(`[createAttendance] Création pointage pour employé ${data.employeeId} le ${data.date}`);

    // Vérifier que l'employé existe
    const employee = await prisma.employe.findUnique({
      where: { id: data.employeeId },
    });
    if (!employee) {
      throw new Error('Employé non trouvé');
    }

    console.log(`[createAttendance] Employé trouvé: ${employee.prenom} ${employee.nom}, type contrat: ${employee.typeContrat}`);

    // Calcul des heures travaillées
    let heuresTravaillees: number | undefined;
    if (data.startTime && data.endTime) {
      const start = new Date(`${data.date}T${data.startTime}`);
      const end = new Date(`${data.date}T${data.endTime}`);
      heuresTravaillees = (end.getTime() - start.getTime()) / (1000 * 60 * 60); // en heures
      console.log(`[createAttendance] Heures calculées: ${heuresTravaillees}h`);
    }

    // Validation selon le type de contrat
    if (employee.typeContrat === 'CONTRAT') {
      if (data.plannedHours === undefined) {
        throw new Error('Les heures prévues sont obligatoires pour les contrats journaliers/honoraires');
      }
      console.log(`[createAttendance] Heures prévues: ${data.plannedHours}h`);
    }

    // Créer ou mettre à jour le pointage (upsert)
    const attendance = await prisma.pointage.upsert({
      where: {
        employeId_date: {
          employeId: data.employeeId,
          date: new Date(data.date + 'T00:00:00Z'),  // Force UTC
        },
      },
      update: {
        heureArrivee: data.startTime ? new Date(`${data.date}T${data.startTime}`) : null,
        heureDepart: data.endTime ? new Date(`${data.date}T${data.endTime}`) : null,
        isPresent: data.isPresent,
        heuresPrevues: data.plannedHours,
        heuresTravaillees: heuresTravaillees,
      },
      create: {
        employeId: data.employeeId,
        date: new Date(data.date + 'T00:00:00Z'),  // Force UTC
        heureArrivee: data.startTime ? new Date(`${data.date}T${data.startTime}`) : null,
        heureDepart: data.endTime ? new Date(`${data.date}T${data.endTime}`) : null,
        isPresent: data.isPresent,
        heuresPrevues: data.plannedHours,
        heuresTravaillees: heuresTravaillees,
      },
      include: { employe: true },
    });

    console.log(`[createAttendance] Pointage créé avec succès: ${attendance.id}`);
    return attendance;
  }

  async getAttendances(filters: {
    employeeId?: string;
    date?: string;
    startDate?: string;
    endDate?: string;
    companyId?: string;
    page?: number;
    limit?: number;
  }): Promise<{ attendances: Attendance[]; total: number }> {
    console.log(`[getAttendances] Récupération avec filtres:`, filters);

    const where: any = {};
    if (filters.employeeId) where.employeId = filters.employeeId;
    if (filters.companyId) where.employe = { entrepriseId: filters.companyId };
    if (filters.date) {
      const startOfDay = new Date(filters.date + 'T00:00:00Z');
      const endOfDay = new Date(filters.date + 'T23:59:59Z');
      where.date = { gte: startOfDay, lte: endOfDay };  // Filtrage par jour en UTC
      console.log(`[getAttendances] Filtrage par date: ${filters.date}`);
    } else if (filters.startDate || filters.endDate) {
      where.date = {};
      if (filters.startDate) where.date.gte = new Date(filters.startDate);
      if (filters.endDate) where.date.lte = new Date(filters.endDate);
    }

    const total = await prisma.pointage.count({ where });
    const attendances = await prisma.pointage.findMany({
      where,
      include: { employe: { select: { id: true, prenom: true, nom: true, poste: true, typeContrat: true } } },
      skip: filters.page && filters.limit ? (filters.page - 1) * filters.limit : undefined,
      take: filters.limit,
      orderBy: { date: 'desc' },
    });

    console.log(`[getAttendances] ${attendances.length} pointages récupérés sur ${total} total`);
    console.log(`[getAttendances] Attendances trouvées:`, attendances.map(att => ({ id: att.id, employeId: att.employeId, date: att.date })));
    return { attendances, total };
  }

  async getAttendanceById(id: string): Promise<Attendance | null> {
    return prisma.pointage.findUnique({
      where: { id },
      include: { employe: true },
    });
  }

  async updateAttendance(id: string, data: Partial<AttendanceData>): Promise<Attendance> {
    console.log(`[updateAttendance] Mise à jour pointage ${id}`);

    const updateData: any = {};
    if (data.startTime !== undefined) updateData.heureArrivee = data.startTime ? new Date(data.startTime) : null;
    if (data.endTime !== undefined) updateData.heureDepart = data.endTime ? new Date(data.endTime) : null;
    if (data.isPresent !== undefined) updateData.isPresent = data.isPresent;
    if (data.plannedHours !== undefined) updateData.heuresPrevues = data.plannedHours;

    // Recalculer les heures travaillées si start/end changent
    if (data.startTime !== undefined || data.endTime !== undefined) {
      const attendance = await this.getAttendanceById(id);
      if (attendance) {
        const dateStr = attendance.date.toISOString().split('T')[0];
        const start = data.startTime ? new Date(`${dateStr}T${data.startTime}`) : attendance.heureArrivee;
        const end = data.endTime ? new Date(`${dateStr}T${data.endTime}`) : attendance.heureDepart;
        if (start && end) {
          updateData.heuresTravaillees = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        }
      }
    }

    return prisma.pointage.update({
      where: { id },
      data: updateData,
      include: { employe: true },
    });
  }

  async getDailyReport(date: string, companyId?: string): Promise<AttendanceReport[]> {
    console.log(`[getDailyReport] Rapport journalier pour ${date}, entreprise: ${companyId || 'toutes'}`);

    const attendances = await prisma.pointage.findMany({
      where: {
        date: new Date(date),
        employe: companyId ? { entrepriseId: companyId } : undefined,
      },
      include: { employe: true },
    });

    return attendances.map(att => ({
      employeeName: `${att.employe.prenom} ${att.employe.nom}`,
      contractType: att.employe.typeContrat,
      hoursWorked: att.heuresTravaillees || 0,
      isPresent: att.isPresent,
    }));
  }

  async getMonthlyReport(employeeId: string, year: number, month: number): Promise<{
    attendances: Attendance[];
    totalHours: number;
    timeBank: number;
  }> {
    console.log(`[getMonthlyReport] Rapport mensuel pour employé ${employeeId}, ${year}-${month}`);

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0); // dernier jour du mois

    const attendances = await prisma.pointage.findMany({
      where: {
        employeId: employeeId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: { employe: true },
      orderBy: { date: 'asc' },
    });

    const totalHours = attendances.reduce((sum, att) => sum + (att.heuresTravaillees || 0), 0);

    // Calcul de la banque d'heures (simplifié: heures travaillées - heures contractuelles)
    const employee = attendances[0]?.employe;
    let expectedHours = 0;
    if (employee) {
      const daysInMonth = endDate.getDate();
      if (employee.typeContrat === 'TEMPS_PLEIN') {
        expectedHours = daysInMonth * 8; // 8h/jour
      } else if (employee.typeContrat === 'TEMPS_PARTIEL') {
        expectedHours = daysInMonth * 4; // 4h/jour, exemple
      }
      // Pour CONTRAT, utiliser heuresPrevues cumulées
    }

    const timeBank = totalHours - expectedHours;

    console.log(`[getMonthlyReport] Total heures: ${totalHours}, Banque: ${timeBank}`);
    return { attendances, totalHours, timeBank };
  }
}
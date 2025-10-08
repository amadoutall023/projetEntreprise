import { PrismaClient } from '../../generated/prisma';
import { PayRun } from '../../types';

const prisma = new PrismaClient();

export class PayRunService {
  async createPayRun(data: {
    name: string;
    startDate: Date;
    endDate: Date;
    companyId: string;
  }): Promise<PayRun> {
    return prisma.cyclePaie.create({
      data: {
        nom: data.name,
        dateDebut: data.startDate,
        dateFin: data.endDate,
        entrepriseId: data.companyId,
      },
      include: { entreprise: true, bulletinsPaie: true },
    });
  }

  async getPayRuns(companyId?: string): Promise<PayRun[]> {
    return prisma.cyclePaie.findMany({
      where: companyId ? { entrepriseId: companyId } : undefined,
      include: { entreprise: true, bulletinsPaie: true },
      orderBy: { creeLe: 'desc' },
    });
  }

  async getPayRunById(id: string): Promise<PayRun | null> {
    return prisma.cyclePaie.findUnique({
      where: { id },
      include: { entreprise: true, bulletinsPaie: { include: { employe: true } } },
    });
  }

  async updatePayRun(id: string, data: Partial<{
    name: string;
    startDate: Date;
    endDate: Date;
    status: 'BROUILLON' | 'APPROUVE' | 'FERME';
  }>): Promise<PayRun> {
    return prisma.cyclePaie.update({
      where: { id },
      data: {
        nom: data.name,
        dateDebut: data.startDate,
        dateFin: data.endDate,
        statut: data.status,
      },
      include: { entreprise: true, bulletinsPaie: true },
    });
  }

  async deletePayRun(id: string): Promise<PayRun> {
    return prisma.cyclePaie.delete({
      where: { id },
    });
  }

  async generatePayslips(payRunId: string): Promise<number> {
    console.log(`[generatePayslips] Démarrage de la génération pour le cycle ${payRunId}`);

    const payRun = await prisma.cyclePaie.findUnique({
      where: { id: payRunId },
      include: { entreprise: true },
    });
    if (!payRun) {
      console.error(`[generatePayslips] Cycle de paie ${payRunId} non trouvé`);
      throw new Error('Pay run not found');
    }

    console.log(`[generatePayslips] Cycle trouvé: ${payRun.nom}, Entreprise: ${payRun.entreprise.nom}`);

    const employees = await prisma.employe.findMany({
      where: { entrepriseId: payRun.entrepriseId, estActif: true },
    });

    console.log(`[generatePayslips] ${employees.length} employés actifs trouvés pour l'entreprise ${payRun.entrepriseId}`);

    let createdCount = 0;

    for (const employee of employees) {
      console.log(`[generatePayslips] Traitement employé: ${employee.prenom} ${employee.nom} (${employee.id})`);

      // Vérifier si un bulletin existe déjà pour cet employé et ce cycle
      const existingPayslip = await prisma.bulletinPaie.findUnique({
        where: {
          employeId_cyclePaieId: {
            employeId: employee.id,
            cyclePaieId: payRun.id,
          },
        },
      });

      if (existingPayslip) {
        console.log(`[generatePayslips] Bulletin déjà existant pour employé ${employee.id}, passage au suivant`);
        continue; // Passer à l'employé suivant si un bulletin existe déjà
      }

      // Récupérer les pointages pour cet employé dans la période du cycle
      const attendances = await prisma.pointage.findMany({
        where: {
          employeId: employee.id,
          date: {
            gte: payRun.dateDebut,
            lte: payRun.dateFin,
          },
          isPresent: true, // Uniquement les jours présents
        },
      });

      const workedDays = attendances.length;
      const workedHours = attendances.reduce((total, att) => total + (att.heuresTravaillees || 0), 0);
      console.log(`[generatePayslips] Employé ${employee.id}: ${workedDays} jours travaillés, ${workedHours.toFixed(2)} heures travaillées`);

      // Calcul du salaire selon le type de contrat et les jours travaillés
      let grossAmount = 0;
      let joursTravailles = workedDays;

      if (employee.typeContrat === 'CONTRAT') {
        // Pour contrat journalier/honoraire: taux journalier * jours travaillés
        grossAmount = employee.taux * workedDays;
      } else if (employee.typeContrat === 'TEMPS_PLEIN') {
        // Pour temps plein: salaire mensuel ajusté selon les jours travaillés
        if (payRun.entreprise.typePeriodePaie === 'MENSUEL') {
          const totalDaysInMonth = Math.ceil((payRun.dateFin.getTime() - payRun.dateDebut.getTime()) / (1000 * 60 * 60 * 24)) + 1;
          grossAmount = (employee.taux / totalDaysInMonth) * workedDays;
        } else if (payRun.entreprise.typePeriodePaie === 'HEBDOMADAIRE') {
          grossAmount = (employee.taux / 7) * workedDays; // taux hebdomadaire / 7 * jours
        } else { // QUOTIDIEN
          grossAmount = employee.taux * workedDays;
        }
      } else if (employee.typeContrat === 'TEMPS_PARTIEL') {
        // Pour temps partiel: même logique mais avec taux réduit
        if (payRun.entreprise.typePeriodePaie === 'MENSUEL') {
          const totalDaysInMonth = Math.ceil((payRun.dateFin.getTime() - payRun.dateDebut.getTime()) / (1000 * 60 * 60 * 24)) + 1;
          grossAmount = (employee.taux / totalDaysInMonth) * workedDays;
        } else if (payRun.entreprise.typePeriodePaie === 'HEBDOMADAIRE') {
          grossAmount = (employee.taux / 7) * workedDays;
        } else { // QUOTIDIEN
          grossAmount = employee.taux * workedDays;
        }
      }

      console.log(`[generatePayslips] Création bulletin pour employé ${employee.id}: montant brut ${grossAmount}, jours travaillés ${joursTravailles}, heures travaillées ${workedHours.toFixed(2)}`);

      await prisma.bulletinPaie.create({
        data: {
          employeId: employee.id,
          cyclePaieId: payRun.id,
          montantBrut: grossAmount,
          deductions: 0,
          montantNet: grossAmount,
          joursTravailles: joursTravailles,
          heuresTravaillees: workedHours,
        },
      });

      createdCount++;
      console.log(`[generatePayslips] Bulletin créé avec succès pour employé ${employee.id}`);
    }

    console.log(`[generatePayslips] Génération terminée: ${createdCount} bulletins créés pour le cycle ${payRunId}`);
    return createdCount;
  }
}
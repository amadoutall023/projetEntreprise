import { Response } from 'express';
import { AttendanceService } from './service';
import { AuthRequest } from '../../middlewares/auth';

const attendanceService = new AttendanceService();

export class AttendanceController {
  async createAttendance(req: AuthRequest, res: Response): Promise<void> {
    try {
      console.log(`[createAttendance API] Requête reçue:`, req.body);

      const attendance = await attendanceService.createAttendance(req.body);
      res.status(201).json(attendance);
    } catch (error) {
      console.error('Create attendance error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getAttendances(req: AuthRequest, res: Response): Promise<void> {
    try {
      console.log(`[getAttendances API] Requête reçue`);
      const { employeeId, date, startDate, endDate, page, limit } = req.query as any;
      console.log(`[getAttendances API] Requête avec paramètres: employeeId=${employeeId}, date=${date}, startDate=${startDate}, endDate=${endDate}`);

      // Filtrage par entreprise pour les non-super-admin
      const companyId = req.user?.role !== 'SUPER_ADMINISTRATEUR' ? req.user?.entrepriseId : undefined;
      console.log(`[getAttendances API] Utilisateur: ${req.user?.userId}, rôle: ${req.user?.role}, entreprise: ${companyId}`);

      const filters = {
        employeeId,
        date,
        startDate,
        endDate,
        companyId,
        page: page ? parseInt(page) : undefined,
        limit: limit ? parseInt(limit) : 50,
      };

      const result = await attendanceService.getAttendances(filters);
      console.log(`[getAttendances API] Réponse: ${result.attendances.length} pointages sur ${result.total}`);
      console.log(`[getAttendances API] Pointages retournés:`, result.attendances.map(att => ({ id: att.id, employeId: att.employeId, isPresent: att.isPresent, heuresTravaillees: att.heuresTravaillees })));

      res.json(result);
    } catch (error) {
      console.error('Get attendances error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getAttendanceById(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const attendance = await attendanceService.getAttendanceById(id);

      if (!attendance) {
        res.status(404).json({ message: 'Pointage non trouvé' });
        return;
      }

      res.json(attendance);
    } catch (error) {
      console.error('Get attendance error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async updateAttendance(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const attendance = await attendanceService.getAttendanceById(id);
      if (!attendance) {
        res.status(404).json({ message: 'Pointage non trouvé' });
        return;
      }

      const updatedAttendance = await attendanceService.updateAttendance(id, updateData);
      res.json(updatedAttendance);
    } catch (error) {
      console.error('Update attendance error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getDailyReport(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { date } = req.query as any;
      if (!date) {
        res.status(400).json({ message: 'Date requise' });
        return;
      }

      // Validation simple du format date
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        res.status(400).json({ message: 'Format de date invalide (YYYY-MM-DD)' });
        return;
      }

      const companyId = req.user?.role !== 'SUPER_ADMINISTRATEUR' ? req.user?.entrepriseId : undefined;
      const report = await attendanceService.getDailyReport(date, companyId);
      res.json(report);
    } catch (error) {
      console.error('Get daily report error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getMonthlyReport(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { employeeId, year, month } = req.params;
      if (!employeeId || !year || !month) {
        res.status(400).json({ message: 'Paramètres requis: employeeId, year, month' });
        return;
      }

      const report = await attendanceService.getMonthlyReport(employeeId, parseInt(year), parseInt(month));
      res.json(report);
    } catch (error) {
      console.error('Get monthly report error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }
}
import { Response } from 'express';
import { DashboardService } from './service';
import { AuthRequest } from '../../middlewares/auth';

const dashboardService = new DashboardService();

export class DashboardController {
  async getKPIs(req: AuthRequest, res: Response): Promise<void> {
    try {
      let companyId: string | undefined;
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR') {
        companyId = req.user?.entrepriseId;
      }

      const kpis = await dashboardService.getKPIs(companyId);
      res.json(kpis);
    } catch (error) {
      console.error('Get KPIs error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }
}
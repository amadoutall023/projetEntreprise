import { Response } from 'express';
import { PayRunService } from './service';
import { AuthRequest } from '../../middlewares/auth';

const payRunService = new PayRunService();

export class PayRunController {
  async createPayRun(req: AuthRequest, res: Response): Promise<void> {
    try {
      const payRunData = {
        ...req.body,
        startDate: new Date(req.body.startDate),
        endDate: new Date(req.body.endDate),
      };

      if (req.user?.role !== 'SUPER_ADMINISTRATEURISTRATEUR' && req.user?.entrepriseId !== payRunData.companyId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      const payRun = await payRunService.createPayRun(payRunData);
      res.status(201).json(payRun);
    } catch (error) {
      console.error('Create pay run error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getPayRuns(req: AuthRequest, res: Response): Promise<void> {
    try {
      let companyId: string | undefined;
      if (req.user?.role !== 'SUPER_ADMINISTRATEURISTRATEUR') {
        companyId = req.user?.entrepriseId;
      }

      const payRuns = await payRunService.getPayRuns(companyId);
      res.json(payRuns);
    } catch (error) {
      console.error('Get pay runs error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getPayRunById(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const payRun = await payRunService.getPayRunById(id);

      if (!payRun) {
        res.status(404).json({ message: 'Cycle de paie non trouvé' });
        return;
      }

      if (req.user?.role !== 'SUPER_ADMINISTRATEURISTRATEUR' && req.user?.entrepriseId !== payRun.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      res.json(payRun);
    } catch (error) {
      console.error('Get pay run error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async updatePayRun(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const payRun = await payRunService.getPayRunById(id);
      if (!payRun) {
        res.status(404).json({ message: 'Cycle de paie non trouvé' });
        return;
      }

      if (req.user?.role !== 'SUPER_ADMINISTRATEURISTRATEUR' && req.user?.entrepriseId !== payRun.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      const updatedPayRun = await payRunService.updatePayRun(id, updateData);
      res.json(updatedPayRun);
    } catch (error) {
      console.error('Update pay run error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async deletePayRun(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const payRun = await payRunService.getPayRunById(id);
      if (!payRun) {
        res.status(404).json({ message: 'Cycle de paie non trouvé' });
        return;
      }

      if (req.user?.role !== 'SUPER_ADMINISTRATEURISTRATEUR' && req.user?.entrepriseId !== payRun.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      await payRunService.deletePayRun(id);
      res.status(204).send();
    } catch (error) {
      console.error('Delete pay run error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async generatePayslips(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const payRun = await payRunService.getPayRunById(id);
      if (!payRun) {
        res.status(404).json({ message: 'Cycle de paie non trouvé' });
        return;
      }

      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== payRun.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      const createdCount = await payRunService.generatePayslips(id);
      res.json({
        message: `${createdCount} bulletin${createdCount > 1 ? 's' : ''} généré${createdCount > 1 ? 's' : ''} avec succès`,
        count: createdCount
      });
    } catch (error) {
      console.error('Generate payslips error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }
}
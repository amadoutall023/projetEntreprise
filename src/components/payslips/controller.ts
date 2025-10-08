import { Response } from 'express';
import { PayslipService } from './service';
import { AuthRequest } from '../../middlewares/auth';
import { PDFService } from '../../utils/pdf';

const payslipService = new PayslipService();
const pdfService = new PDFService();

export class PayslipController {
  async getPayslips(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { payRunId, employeeId, page, limit } = req.query as any;
      console.log(`[getPayslips API] Requête reçue avec paramètres: payRunId=${payRunId}, employeeId=${employeeId}, page=${page}, limit=${limit}`);

      // Filtrage par entreprise pour les non-super-admin
      let companyId: string | undefined;
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR') {
        companyId = req.user?.entrepriseId;
      }

      const filters = {
        payRunId,
        employeeId,
        companyId,
        page: page ? parseInt(page) : undefined,
        limit: limit ? parseInt(limit) : 50, // Default limit of 50
      };
      const result = await payslipService.getPayslips(filters);
      console.log(`[getPayslips API] Réponse: ${result.payslips.length} bulletins sur ${result.total} total`);

      res.json(result);
    } catch (error) {
      console.error('Get payslips error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getPayslipById(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const payslip = await payslipService.getPayslipById(id);

      if (!payslip) {
        res.status(404).json({ message: 'Bulletin non trouvé' });
        return;
      }

      // Vérifier l'accès à l'entreprise
      const payslipWithEmploye = payslip as any;
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== payslipWithEmploye.employe.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      res.json(payslip);
    } catch (error) {
      console.error('Get payslip error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async updatePayslip(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const payslip = await payslipService.getPayslipById(id);
      if (!payslip) {
        res.status(404).json({ message: 'Bulletin non trouvé' });
        return;
      }

      // Vérifier l'accès à l'entreprise
      const payslipWithEmploye = payslip as any;
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== payslipWithEmploye.employe.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      const updatedPayslip = await payslipService.updatePayslip(id, updateData);
      res.json(updatedPayslip);
    } catch (error) {
      console.error('Update payslip error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async recalculatePayslip(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const payslip = await payslipService.getPayslipById(id);
      if (!payslip) {
        res.status(404).json({ message: 'Bulletin non trouvé' });
        return;
      }

      // Vérifier l'accès à l'entreprise
      const payslipWithEmploye = payslip as any;
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== payslipWithEmploye.employe.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      const updatedPayslip = await payslipService.recalculatePayslipAmount(id);
      res.json(updatedPayslip);
    } catch (error) {
      console.error('Recalculate payslip error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async generatePayslipPDF(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const payslip = await payslipService.getPayslipById(id);

      if (!payslip) {
        res.status(404).json({ message: 'Bulletin non trouvé' });
        return;
      }

      // Vérifier l'accès à l'entreprise
      const payslipWithEmploye = payslip as any;
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== payslipWithEmploye.employe.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      const pdfBuffer = await pdfService.generatePayslipPDF(payslip as any);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=bulletin-${(payslip as any).employe.prenom}-${(payslip as any).employe.nom}.pdf`);
      res.send(pdfBuffer);
    } catch (error) {
      console.error('Generate payslip PDF error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }
}
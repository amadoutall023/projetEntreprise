import { Response } from 'express';
import { PaymentService } from './service';
import { AuthRequest } from '../../middlewares/auth';
import { PDFService } from '../../utils/pdf';
import { PrismaClient } from '../../generated/prisma';

const paymentService = new PaymentService();
const pdfService = new PDFService();
const prisma = new PrismaClient();

export class PaymentController {
  async createPayment(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { payslipId, employeeId, amount, method, reference, notes } = req.body;

      if (!payslipId && !employeeId) {
        res.status(400).json({ message: 'ID du bulletin de paie OU ID de l\'employé requis' });
        return;
      }

      if (payslipId && employeeId) {
        res.status(400).json({ message: 'Un paiement ne peut être lié qu\'à un bulletin OU un employé' });
        return;
      }

      const payment = await paymentService.createPayment({
        payslipId,
        employeeId,
        amount,
        method,
        reference,
        notes,
      });
      res.status(201).json(payment);
    } catch (error) {
      console.error('Create payment error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getPayments(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { payslipId, employeeId } = req.query as any;

      // Filtrage par entreprise pour les non-super-admin
      let companyId: string | undefined;
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR') {
        companyId = req.user?.entrepriseId;
      }

      const payments = await paymentService.getPayments({
        payslipId,
        employeeId,
        companyId,
      });
      res.json(payments);
    } catch (error) {
      console.error('Get payments error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async generatePaymentReceiptPDF(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const payment = await prisma.paiement.findUnique({
        where: { id },
        include: {
          bulletinPaie: {
            include: {
              employe: true,
              cyclePaie: {
                include: { entreprise: true }
              }
            }
          }
        }
      });

      if (!payment) {
        res.status(404).json({ message: 'Paiement non trouvé' });
        return;
      }

      const pdfBuffer = await pdfService.generatePaymentReceiptPDF(payment as any);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=recu-paiement-${payment.id}.pdf`);
      res.send(pdfBuffer);
    } catch (error) {
      console.error('Generate payment receipt PDF error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async markEmployeeAsPaid(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { employeeId, amount, method, reference, notes } = req.body;

      if (!employeeId) {
        res.status(400).json({ message: 'ID de l\'employé requis' });
        return;
      }

      const payment = await paymentService.markEmployeeAsPaid(employeeId, amount, method, reference, notes);
      res.status(201).json(payment);
    } catch (error) {
      console.error('Mark employee as paid error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getEmployeePaymentStatus(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { employeeId } = req.params;

      if (!employeeId) {
        res.status(400).json({ message: 'ID de l\'employé requis' });
        return;
      }

      // Vérifier l'accès à l'entreprise
      const employee = await prisma.employe.findUnique({ where: { id: employeeId } });
      if (!employee) {
        res.status(404).json({ message: 'Employé non trouvé' });
        return;
      }

      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== employee.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      const status = await paymentService.getEmployeePaymentStatus(employeeId);
      res.json(status);
    } catch (error) {
      console.error('Get employee payment status error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async generatePaymentListPDF(req: AuthRequest, res: Response): Promise<void> {
    try {
      let companyId: string | undefined;
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR') {
        companyId = req.user?.entrepriseId;
      }

      const payments = await prisma.paiement.findMany({
        where: companyId ? {
          OR: [
            { bulletinPaie: { cyclePaie: { entrepriseId: companyId } } },
            { employe: { entrepriseId: companyId } }
          ]
        } : undefined,
        include: {
          bulletinPaie: {
            include: { employe: true }
          },
          employe: true
        },
        orderBy: { creeLe: 'desc' },
      });

      const companyName = companyId ?
        (await prisma.entreprise.findUnique({ where: { id: companyId } }))?.nom || 'Entreprise' :
        'Toutes les entreprises';

      const pdfBuffer = await pdfService.generatePaymentListPDF(payments as any, companyName);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=liste-paiements-${new Date().toISOString().split('T')[0]}.pdf`);
      res.send(pdfBuffer);
    } catch (error) {
      console.error('Generate payment list PDF error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }
}
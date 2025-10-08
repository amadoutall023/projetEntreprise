"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const service_1 = require("./service");
const pdf_1 = require("../../utils/pdf");
const prisma_1 = require("../../generated/prisma");
const paymentService = new service_1.PaymentService();
const pdfService = new pdf_1.PDFService();
const prisma = new prisma_1.PrismaClient();
class PaymentController {
    async createPayment(req, res) {
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
        }
        catch (error) {
            console.error('Create payment error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
    async getPayments(req, res) {
        try {
            const { payslipId, employeeId } = req.query;
            // Filtrage par entreprise pour les non-super-admin
            let companyId;
            if (req.user?.role !== 'SUPER_ADMINISTRATEUR') {
                companyId = req.user?.entrepriseId;
            }
            const payments = await paymentService.getPayments({
                payslipId,
                employeeId,
                companyId,
            });
            res.json(payments);
        }
        catch (error) {
            console.error('Get payments error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
    async generatePaymentReceiptPDF(req, res) {
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
            const pdfBuffer = await pdfService.generatePaymentReceiptPDF(payment);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=recu-paiement-${payment.id}.pdf`);
            res.send(pdfBuffer);
        }
        catch (error) {
            console.error('Generate payment receipt PDF error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
    async markEmployeeAsPaid(req, res) {
        try {
            const { employeeId, amount, method, reference, notes } = req.body;
            if (!employeeId) {
                res.status(400).json({ message: 'ID de l\'employé requis' });
                return;
            }
            const payment = await paymentService.markEmployeeAsPaid(employeeId, amount, method, reference, notes);
            res.status(201).json(payment);
        }
        catch (error) {
            console.error('Mark employee as paid error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
    async getEmployeePaymentStatus(req, res) {
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
        }
        catch (error) {
            console.error('Get employee payment status error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
    async generatePaymentListPDF(req, res) {
        try {
            let companyId;
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
            const pdfBuffer = await pdfService.generatePaymentListPDF(payments, companyName);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=liste-paiements-${new Date().toISOString().split('T')[0]}.pdf`);
            res.send(pdfBuffer);
        }
        catch (error) {
            console.error('Generate payment list PDF error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
}
exports.PaymentController = PaymentController;

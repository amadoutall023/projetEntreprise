"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class PaymentService {
    async createPayment(data) {
        // Validation: soit payslipId soit employeeId doit être fourni
        if (!data.payslipId && !data.employeeId) {
            throw new Error('Soit payslipId soit employeeId doit être fourni');
        }
        if (data.payslipId && data.employeeId) {
            throw new Error('Un paiement ne peut être lié qu\'à un bulletin OU un employé, pas les deux');
        }
        console.log(`[createPayment] Création paiement: montant ${data.amount}, méthode ${data.method}`);
        // Si c'est un paiement de bulletin, marquer le bulletin comme payé
        if (data.payslipId) {
            await prisma.bulletinPaie.update({
                where: { id: data.payslipId },
                data: { statut: 'PAYE' }
            });
            console.log(`[createPayment] Bulletin ${data.payslipId} marqué comme PAYE`);
        }
        return prisma.paiement.create({
            data: {
                bulletinPaieId: data.payslipId,
                employeId: data.employeeId,
                montant: data.amount,
                methode: data.method,
                reference: data.reference,
                notes: data.notes,
            },
            include: {
                bulletinPaie: {
                    include: {
                        employe: { select: { id: true, prenom: true, nom: true } }
                    }
                },
                employe: { select: { id: true, prenom: true, nom: true } }
            },
        });
    }
    async getPayments(filters = {}) {
        console.log(`[getPayments] Récupération avec filtres:`, filters);
        const where = {};
        if (filters.payslipId)
            where.bulletinPaieId = filters.payslipId;
        if (filters.employeeId)
            where.employeId = filters.employeeId;
        if (filters.companyId) {
            where.OR = [
                { bulletinPaie: { employe: { entrepriseId: filters.companyId } } },
                { employe: { entrepriseId: filters.companyId } }
            ];
        }
        return prisma.paiement.findMany({
            where,
            include: {
                bulletinPaie: {
                    include: {
                        employe: { select: { id: true, prenom: true, nom: true } }
                    }
                },
                employe: { select: { id: true, prenom: true, nom: true } }
            },
            orderBy: { creeLe: 'desc' },
        });
    }
    async getPaymentById(id) {
        return prisma.paiement.findUnique({
            where: { id },
            include: {
                bulletinPaie: {
                    include: {
                        employe: { select: { id: true, prenom: true, nom: true } }
                    }
                },
                employe: { select: { id: true, prenom: true, nom: true } }
            },
        });
    }
    async markEmployeeAsPaid(employeeId, amount, method, reference, notes) {
        console.log(`[markEmployeeAsPaid] Marquage employé ${employeeId} comme payé: ${amount}`);
        // Vérifier que l'employé existe
        const employee = await prisma.employe.findUnique({
            where: { id: employeeId },
        });
        if (!employee) {
            throw new Error('Employé non trouvé');
        }
        // Créer le paiement direct
        return this.createPayment({
            employeeId,
            amount,
            method,
            reference,
            notes: notes || `Paiement direct pour ${employee.prenom} ${employee.nom}`,
        });
    }
    async getEmployeePaymentStatus(employeeId) {
        console.log(`[getEmployeePaymentStatus] Statut de paiement pour employé ${employeeId}`);
        const payments = await this.getPayments({ employeeId });
        const totalPaid = payments.reduce((sum, payment) => sum + payment.montant, 0);
        const lastPayment = payments[0]; // déjà trié par date décroissante
        return {
            totalPaid,
            lastPayment,
            paymentCount: payments.length,
        };
    }
}
exports.PaymentService = PaymentService;

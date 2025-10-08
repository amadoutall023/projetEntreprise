"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayslipService = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class PayslipService {
    async getPayslips(filters) {
        console.log(`[getPayslips] Récupération des bulletins avec filtres:`, filters);
        const where = {};
        if (filters.payRunId) {
            where.cyclePaieId = filters.payRunId;
            console.log(`[getPayslips] Filtrage par cycle de paie: ${filters.payRunId}`);
        }
        if (filters.employeeId) {
            where.employeId = filters.employeeId;
            console.log(`[getPayslips] Filtrage par employé: ${filters.employeeId}`);
        }
        if (filters.companyId) {
            where.employe = { entrepriseId: filters.companyId };
            console.log(`[getPayslips] Filtrage par entreprise: ${filters.companyId}`);
        }
        const total = await prisma.bulletinPaie.count({ where });
        console.log(`[getPayslips] Nombre total de bulletins trouvés: ${total}`);
        const payslips = await prisma.bulletinPaie.findMany({
            where,
            include: {
                employe: {
                    select: {
                        id: true,
                        prenom: true,
                        nom: true,
                        poste: true,
                        taux: true,
                        typeContrat: true
                    }
                },
                cyclePaie: { select: { id: true, nom: true, dateDebut: true, dateFin: true } },
                paiements: true
            },
            skip: filters.page && filters.limit ? (filters.page - 1) * filters.limit : undefined,
            take: filters.limit,
            orderBy: { creeLe: 'desc' },
        });
        console.log(`[getPayslips] ${payslips.length} bulletins récupérés (page ${filters.page || 1}, limite ${filters.limit || 'tous'})`);
        return { payslips, total };
    }
    async getPayslipById(id) {
        return prisma.bulletinPaie.findUnique({
            where: { id },
            include: {
                employe: {
                    select: {
                        id: true,
                        prenom: true,
                        nom: true,
                        poste: true,
                        taux: true,
                        typeContrat: true
                    },
                    include: { entreprise: true }
                },
                cyclePaie: {
                    include: { entreprise: true }
                },
                paiements: true
            },
        });
    }
    async updatePayslip(id, data) {
        return prisma.bulletinPaie.update({
            where: { id },
            data: {
                montantBrut: data.grossAmount,
                deductions: data.deductions,
                montantNet: data.netAmount,
                joursTravailles: data.workedDays,
            },
            include: { employe: true, cyclePaie: true, paiements: true },
        });
    }
    async recalculatePayslipAmount(payslipId) {
        console.log(`[recalculatePayslipAmount] Recalcul du bulletin ${payslipId}`);
        const payslip = await prisma.bulletinPaie.findUnique({
            where: { id: payslipId },
            include: { employe: true, cyclePaie: { include: { entreprise: true } } }
        });
        if (!payslip) {
            throw new Error('Bulletin non trouvé');
        }
        // Récupérer les pointages pour cet employé dans la période du cycle
        const attendances = await prisma.pointage.findMany({
            where: {
                employeId: payslip.employeId,
                date: {
                    gte: payslip.cyclePaie.dateDebut,
                    lte: payslip.cyclePaie.dateFin,
                },
                isPresent: true,
            },
        });
        const workedDays = attendances.length;
        console.log(`[recalculatePayslipAmount] ${workedDays} jours travaillés trouvés`);
        // Recalculer le montant selon la même logique que generatePayslips
        let grossAmount = 0;
        if (payslip.employe.typeContrat === 'CONTRAT') {
            grossAmount = payslip.employe.taux * workedDays;
        }
        else if (payslip.employe.typeContrat === 'TEMPS_PLEIN') {
            if (payslip.cyclePaie.entreprise.typePeriodePaie === 'MENSUEL') {
                const totalDaysInMonth = Math.ceil((payslip.cyclePaie.dateFin.getTime() - payslip.cyclePaie.dateDebut.getTime()) / (1000 * 60 * 60 * 24)) + 1;
                grossAmount = (payslip.employe.taux / totalDaysInMonth) * workedDays;
            }
            else if (payslip.cyclePaie.entreprise.typePeriodePaie === 'HEBDOMADAIRE') {
                grossAmount = (payslip.employe.taux / 7) * workedDays;
            }
            else {
                grossAmount = payslip.employe.taux * workedDays;
            }
        }
        else if (payslip.employe.typeContrat === 'TEMPS_PARTIEL') {
            if (payslip.cyclePaie.entreprise.typePeriodePaie === 'MENSUEL') {
                const totalDaysInMonth = Math.ceil((payslip.cyclePaie.dateFin.getTime() - payslip.cyclePaie.dateDebut.getTime()) / (1000 * 60 * 60 * 24)) + 1;
                grossAmount = (payslip.employe.taux / totalDaysInMonth) * workedDays;
            }
            else if (payslip.cyclePaie.entreprise.typePeriodePaie === 'HEBDOMADAIRE') {
                grossAmount = (payslip.employe.taux / 7) * workedDays;
            }
            else {
                grossAmount = payslip.employe.taux * workedDays;
            }
        }
        console.log(`[recalculatePayslipAmount] Nouveau montant brut: ${grossAmount}`);
        return prisma.bulletinPaie.update({
            where: { id: payslipId },
            data: {
                montantBrut: grossAmount,
                montantNet: grossAmount, // Simplifié, on garde les déductions existantes
                joursTravailles: workedDays,
            },
            include: { employe: true, cyclePaie: true, paiements: true },
        });
    }
}
exports.PayslipService = PayslipService;

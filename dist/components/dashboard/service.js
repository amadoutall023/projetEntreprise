"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class DashboardService {
    async getKPIs(companyId) {
        const where = companyId ? { entrepriseId: companyId } : {};
        // Masse salariale totale
        const totalSalaryMass = await prisma.bulletinPaie.aggregate({
            where: {
                cyclePaie: where,
                statut: { in: ['APPROUVE', 'PAYE', 'PARTIEL'] }
            },
            _sum: { montantBrut: true },
        });
        // Montant payé
        const paidAmount = await prisma.paiement.aggregate({
            where: {
                bulletinPaie: {
                    cyclePaie: where,
                },
            },
            _sum: { montant: true },
        });
        // Nombre d'employés actifs
        const activeEmployees = await prisma.employe.count({
            where: {
                ...where,
                estActif: true,
            },
        });
        // Évolution sur 6 mois (simplifié)
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        const monthlyData = await prisma.bulletinPaie.groupBy({
            by: ['creeLe'],
            where: {
                cyclePaie: where,
                creeLe: { gte: sixMonthsAgo },
            },
            _sum: { montantBrut: true },
            orderBy: { creeLe: 'asc' },
        });
        return {
            totalSalaryMass: totalSalaryMass._sum.montantBrut || 0,
            paidAmount: paidAmount._sum.montant || 0,
            remainingAmount: (totalSalaryMass._sum.montantBrut || 0) - (paidAmount._sum.montant || 0),
            activeEmployees,
            monthlyEvolution: monthlyData.map((item) => ({
                month: item.creeLe.toISOString().slice(0, 7),
                salaryMass: item._sum.montantBrut || 0,
            })),
        };
    }
}
exports.DashboardService = DashboardService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class EmployeeService {
    async createEmployee(data) {
        return prisma.employe.create({
            data: {
                prenom: data.firstName,
                nom: data.lastName,
                poste: data.position,
                typeContrat: data.contractType,
                taux: data.rate,
                compteBancaire: data.bankAccount,
                nomBanque: data.bankName,
                entrepriseId: data.companyId,
            },
            include: { entreprise: true },
        });
    }
    async getEmployees(filters) {
        const where = {};
        if (filters.companyId)
            where.entrepriseId = filters.companyId;
        if (filters.status)
            where.estActif = filters.status === 'active';
        if (filters.position)
            where.poste = { contains: filters.position };
        if (filters.contractType)
            where.typeContrat = filters.contractType;
        const total = await prisma.employe.count({ where });
        const employees = await prisma.employe.findMany({
            where,
            include: { entreprise: true },
            skip: filters.page && filters.limit ? (filters.page - 1) * filters.limit : undefined,
            take: filters.limit,
            orderBy: { creeLe: 'desc' },
        });
        return { employees, total };
    }
    async getEmployeeById(id) {
        return prisma.employe.findUnique({
            where: { id },
            include: { entreprise: true, bulletinsPaie: true },
        });
    }
    async updateEmployee(id, data) {
        return prisma.employe.update({
            where: { id },
            data: {
                prenom: data.firstName,
                nom: data.lastName,
                poste: data.position,
                typeContrat: data.contractType,
                taux: data.rate,
                compteBancaire: data.bankAccount,
                nomBanque: data.bankName,
                estActif: data.isActive,
            },
            include: { entreprise: true },
        });
    }
    async deleteEmployee(id) {
        return prisma.employe.delete({
            where: { id },
        });
    }
    async toggleEmployeeStatus(id) {
        const employee = await prisma.employe.findUnique({ where: { id } });
        if (!employee)
            throw new Error('Employee not found');
        return prisma.employe.update({
            where: { id },
            data: { estActif: !employee.estActif },
            include: { entreprise: true },
        });
    }
}
exports.EmployeeService = EmployeeService;

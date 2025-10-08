"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const prisma_1 = require("../../generated/prisma");
const service_1 = require("../auth/service");
const prisma = new prisma_1.PrismaClient();
const authService = new service_1.AuthService();
class CompanyService {
    async createCompany(data) {
        // Créer l'entreprise
        const company = await prisma.entreprise.create({
            data: {
                nom: data.name,
                logo: data.logo,
                adresse: data.address,
                devise: data.currency,
                typePeriodePaie: data.payPeriodType,
            },
        });
        // Créer l'utilisateur admin pour cette entreprise
        await authService.createUser({
            email: data.adminEmail,
            password: data.adminPassword,
            firstName: 'Admin',
            lastName: 'Principal',
            role: 'ADMINISTRATEUR',
            companyId: company.id,
        });
        return company;
    }
    async getAllCompanies() {
        return prisma.entreprise.findMany({
            select: {
                id: true,
                nom: true,
                logo: true,
                adresse: true,
                devise: true,
                typePeriodePaie: true,
                creeLe: true,
                misAJourLe: true,
                _count: {
                    select: {
                        utilisateurs: true,
                        employes: true,
                        cyclesPaie: true,
                    },
                },
            },
        });
    }
    async getCompanyById(id) {
        return prisma.entreprise.findUnique({
            where: { id },
            select: {
                id: true,
                nom: true,
                logo: true,
                adresse: true,
                devise: true,
                typePeriodePaie: true,
                creeLe: true,
                misAJourLe: true,
                utilisateurs: {
                    select: {
                        id: true,
                        email: true,
                        prenom: true,
                        nom: true,
                        role: true,
                        estActif: true,
                    },
                },
                employes: {
                    select: {
                        id: true,
                        prenom: true,
                        nom: true,
                        poste: true,
                        typeContrat: true,
                        taux: true,
                        estActif: true,
                    },
                },
                cyclesPaie: {
                    select: {
                        id: true,
                        nom: true,
                        dateDebut: true,
                        dateFin: true,
                        statut: true,
                    },
                },
                _count: {
                    select: {
                        utilisateurs: true,
                        employes: true,
                        cyclesPaie: true,
                    },
                },
            },
        });
    }
    async updateCompany(id, data) {
        return prisma.entreprise.update({
            where: { id },
            data: {
                nom: data.name,
                logo: data.logo,
                adresse: data.address,
                devise: data.currency,
                typePeriodePaie: data.payPeriodType,
            },
        });
    }
    async deleteCompany(id) {
        return prisma.entreprise.delete({
            where: { id },
        });
    }
}
exports.CompanyService = CompanyService;

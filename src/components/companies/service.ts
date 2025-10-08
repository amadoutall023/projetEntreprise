import { PrismaClient } from '../../generated/prisma';
import { Company } from '../../types';
import { AuthService } from '../auth/service';

const prisma = new PrismaClient();
const authService = new AuthService();

export class CompanyService {
  async createCompany(data: {
    name: string;
    logo?: string;
    address?: string;
    currency?: string;
    payPeriodType?: 'MENSUEL' | 'HEBDOMADAIRE' | 'QUOTIDIEN';
    adminEmail: string;
    adminPassword: string;
  }): Promise<Company> {
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

  async getAllCompanies(): Promise<Company[]> {
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

  async getCompanyById(id: string): Promise<Company | null> {
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

  async updateCompany(id: string, data: Partial<{
    name: string;
    logo: string;
    address: string;
    currency: string;
    payPeriodType: 'MENSUEL' | 'HEBDOMADAIRE' | 'QUOTIDIEN';
  }>): Promise<Company> {
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

  async deleteCompany(id: string): Promise<Company> {
    return prisma.entreprise.delete({
      where: { id },
    });
  }
}
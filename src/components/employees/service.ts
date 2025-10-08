import { PrismaClient } from '../../generated/prisma';
import { Employee } from '../../types';

const prisma = new PrismaClient();

export class EmployeeService {
  async createEmployee(data: {
    firstName: string;
    lastName: string;
    position: string;
    contractType: 'TEMPS_PLEIN' | 'TEMPS_PARTIEL' | 'CONTRAT';
    rate: number;
    bankAccount?: string;
    bankName?: string;
    companyId: string;
  }): Promise<Employee> {
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

  async getEmployees(filters: {
    companyId?: string;
    status?: 'active' | 'inactive';
    position?: string;
    contractType?: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT';
    page?: number;
    limit?: number;
  }): Promise<{ employees: Employee[]; total: number }> {
    const where: any = {};

    if (filters.companyId) where.entrepriseId = filters.companyId;
    if (filters.status) where.estActif = filters.status === 'active';
    if (filters.position) where.poste = { contains: filters.position };
    if (filters.contractType) where.typeContrat = filters.contractType;

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

  async getEmployeeById(id: string): Promise<Employee | null> {
    return prisma.employe.findUnique({
      where: { id },
      include: { entreprise: true, bulletinsPaie: true },
    });
  }

  async updateEmployee(id: string, data: Partial<{
    firstName: string;
    lastName: string;
    position: string;
    contractType: 'TEMPS_PLEIN' | 'TEMPS_PARTIEL' | 'CONTRAT';
    rate: number;
    bankAccount: string;
    bankName: string;
    isActive: boolean;
  }>): Promise<Employee> {
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

  async deleteEmployee(id: string): Promise<Employee> {
    return prisma.employe.delete({
      where: { id },
    });
  }

  async toggleEmployeeStatus(id: string): Promise<Employee> {
    const employee = await prisma.employe.findUnique({ where: { id } });
    if (!employee) throw new Error('Employee not found');

    return prisma.employe.update({
      where: { id },
      data: { estActif: !employee.estActif },
      include: { entreprise: true },
    });
  }
}
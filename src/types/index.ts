import { Utilisateur, Entreprise, Employe, CyclePaie, BulletinPaie, Paiement, Pointage } from '../generated/prisma';

export type { Utilisateur as User, Entreprise as Company, Employe as Employee, CyclePaie as PayRun, BulletinPaie as Payslip, Paiement as Payment, Pointage as Attendance };

export type UserWithCompany = Utilisateur & {
  entreprise?: Entreprise | null;
};

export interface AuthRequest extends Request {
  user?: Utilisateur;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: 'SUPER_ADMINISTRATEUR' | 'ADMINISTRATEUR' | 'CAISSIER';
  companyId?: string;
}

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  entrepriseId?: string;
}

export interface DashboardKPI {
  totalSalaryMass: number;
  paidAmount: number;
  remainingAmount: number;
  activeEmployees: number;
  monthlyEvolution: Array<{
    month: string;
    salaryMass: number;
    paidAmount: number;
  }>;
}
import { z } from 'zod';

export const createCompanySchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Nom doit contenir au moins 2 caractères'),
    logo: z.string().optional(),
    address: z.string().optional(),
    currency: z.string().default('XOF'),
    payPeriodType: z.enum(['MENSUEL', 'HEBDOMADAIRE', 'QUOTIDIEN']).default('MENSUEL'),
    adminEmail: z.string().email('Email invalide'),
    adminPassword: z.string().min(6, 'Mot de passe doit contenir au moins 6 caractères'),
  }),
});

export const updateCompanySchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Nom doit contenir au moins 2 caractères').optional(),
    logo: z.string().optional(),
    address: z.string().optional(),
    currency: z.string().optional(),
    payPeriodType: z.enum(['MENSUEL', 'HEBDOMADAIRE', 'QUOTIDIEN']).optional(),
  }),
  params: z.object({
    id: z.string(),
  }),
});

export const getCompanySchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export type CreateCompanyInput = z.infer<typeof createCompanySchema>['body'];
export type UpdateCompanyInput = z.infer<typeof updateCompanySchema>['body'];
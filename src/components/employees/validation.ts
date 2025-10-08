import { z } from 'zod';

export const createEmployeeSchema = z.object({
  body: z.object({
    firstName: z.string().min(2, 'Prénom doit contenir au moins 2 caractères'),
    lastName: z.string().min(2, 'Nom doit contenir au moins 2 caractères'),
    position: z.string().min(2, 'Poste doit contenir au moins 2 caractères'),
    contractType: z.enum(['TEMPS_PLEIN', 'TEMPS_PARTIEL', 'CONTRAT']),
    rate: z.number().positive('Taux doit être positif'),
    bankAccount: z.string().optional(),
    bankName: z.string().optional(),
    companyId: z.string(),
  }),
});

export const updateEmployeeSchema = z.object({
  body: z.object({
    firstName: z.string().min(2, 'Prénom doit contenir au moins 2 caractères').optional(),
    lastName: z.string().min(2, 'Nom doit contenir au moins 2 caractères').optional(),
    position: z.string().min(2, 'Poste doit contenir au moins 2 caractères').optional(),
    contractType: z.enum(['TEMPS_PLEIN', 'TEMPS_PARTIEL', 'CONTRAT']).optional(),
    rate: z.number().positive('Taux doit être positif').optional(),
    bankAccount: z.string().optional(),
    bankName: z.string().optional(),
    isActive: z.boolean().optional(),
  }),
  params: z.object({
    id: z.string(),
  }),
});

export const getEmployeeSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export const getEmployeesSchema = z.object({
  query: z.object({
    status: z.enum(['active', 'inactive']).optional(),
    position: z.string().optional(),
    contractType: z.enum(['TEMPS_PLEIN', 'TEMPS_PARTIEL', 'CONTRAT']).optional(),
    page: z.string().transform(Number).optional(),
    limit: z.string().transform(Number).optional(),
  }),
});

export type CreateEmployeeInput = z.infer<typeof createEmployeeSchema>['body'];
export type UpdateEmployeeInput = z.infer<typeof updateEmployeeSchema>['body'];
export type EmployeeFilters = z.infer<typeof getEmployeesSchema>['query'];
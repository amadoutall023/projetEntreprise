import { z } from 'zod';

export const createPayRunSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    companyId: z.string(),
  }),
});

export const updatePayRunSchema = z.object({
  body: z.object({
    name: z.string().min(2).optional(),
    startDate: z.string().datetime().optional(),
    endDate: z.string().datetime().optional(),
    status: z.enum(['BROUILLON', 'APPROUVE', 'FERME']).optional(),
  }),
  params: z.object({
    id: z.string(),
  }),
});

export type CreatePayRunInput = z.infer<typeof createPayRunSchema>['body'];
export type UpdatePayRunInput = z.infer<typeof updatePayRunSchema>['body'];
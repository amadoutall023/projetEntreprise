import { z } from 'zod';

export const updatePayslipSchema = z.object({
  body: z.object({
    grossAmount: z.number().optional(),
    deductions: z.number().optional(),
    netAmount: z.number().optional(),
    workedDays: z.number().optional(),
  }),
  params: z.object({
    id: z.string(),
  }),
});

export type UpdatePayslipInput = z.infer<typeof updatePayslipSchema>['body'];
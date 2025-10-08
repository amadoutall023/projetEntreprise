import { z } from 'zod';

export const createAttendanceSchema = z.object({
  body: z.object({
    employeeId: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD format
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    isPresent: z.boolean(),
    plannedHours: z.number().positive().optional(),
  }),
});

export const getAttendancesSchema = z.object({
  query: z.object({
    employeeId: z.string().optional(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    page: z.string().regex(/^\d+$/).optional().transform(val => val ? parseInt(val) : undefined),
    limit: z.string().regex(/^\d+$/).optional().transform(val => val ? parseInt(val) : 50),
  }),
});

export const updateAttendanceSchema = z.object({
  body: z.object({
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    isPresent: z.boolean().optional(),
    plannedHours: z.number().positive().optional(),
  }),
  params: z.object({
    id: z.string(),
  }),
});

export type CreateAttendanceInput = z.infer<typeof createAttendanceSchema>['body'];
export type GetAttendancesInput = z.infer<typeof getAttendancesSchema>['query'];
export type UpdateAttendanceInput = z.infer<typeof updateAttendanceSchema>['body'];
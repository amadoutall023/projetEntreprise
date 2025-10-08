"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAttendanceSchema = exports.getAttendancesSchema = exports.createAttendanceSchema = void 0;
const zod_1 = require("zod");
exports.createAttendanceSchema = zod_1.z.object({
    body: zod_1.z.object({
        employeeId: zod_1.z.string(),
        date: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD format
        startTime: zod_1.z.string().optional(),
        endTime: zod_1.z.string().optional(),
        isPresent: zod_1.z.boolean(),
        plannedHours: zod_1.z.number().positive().optional(),
    }),
});
exports.getAttendancesSchema = zod_1.z.object({
    query: zod_1.z.object({
        employeeId: zod_1.z.string().optional(),
        date: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
        startDate: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
        endDate: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
        page: zod_1.z.string().regex(/^\d+$/).optional().transform(val => val ? parseInt(val) : undefined),
        limit: zod_1.z.string().regex(/^\d+$/).optional().transform(val => val ? parseInt(val) : 50),
    }),
});
exports.updateAttendanceSchema = zod_1.z.object({
    body: zod_1.z.object({
        startTime: zod_1.z.string().optional(),
        endTime: zod_1.z.string().optional(),
        isPresent: zod_1.z.boolean().optional(),
        plannedHours: zod_1.z.number().positive().optional(),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
});

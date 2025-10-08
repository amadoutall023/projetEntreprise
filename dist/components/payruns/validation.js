"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePayRunSchema = exports.createPayRunSchema = void 0;
const zod_1 = require("zod");
exports.createPayRunSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2),
        startDate: zod_1.z.string().datetime(),
        endDate: zod_1.z.string().datetime(),
        companyId: zod_1.z.string(),
    }),
});
exports.updatePayRunSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2).optional(),
        startDate: zod_1.z.string().datetime().optional(),
        endDate: zod_1.z.string().datetime().optional(),
        status: zod_1.z.enum(['BROUILLON', 'APPROUVE', 'FERME']).optional(),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
});

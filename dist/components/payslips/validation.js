"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePayslipSchema = void 0;
const zod_1 = require("zod");
exports.updatePayslipSchema = zod_1.z.object({
    body: zod_1.z.object({
        grossAmount: zod_1.z.number().optional(),
        deductions: zod_1.z.number().optional(),
        netAmount: zod_1.z.number().optional(),
        workedDays: zod_1.z.number().optional(),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
});

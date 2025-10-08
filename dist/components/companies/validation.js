"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompanySchema = exports.updateCompanySchema = exports.createCompanySchema = void 0;
const zod_1 = require("zod");
exports.createCompanySchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2, 'Nom doit contenir au moins 2 caractères'),
        logo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        currency: zod_1.z.string().default('XOF'),
        payPeriodType: zod_1.z.enum(['MENSUEL', 'HEBDOMADAIRE', 'QUOTIDIEN']).default('MENSUEL'),
        adminEmail: zod_1.z.string().email('Email invalide'),
        adminPassword: zod_1.z.string().min(6, 'Mot de passe doit contenir au moins 6 caractères'),
    }),
});
exports.updateCompanySchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2, 'Nom doit contenir au moins 2 caractères').optional(),
        logo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        currency: zod_1.z.string().optional(),
        payPeriodType: zod_1.z.enum(['MENSUEL', 'HEBDOMADAIRE', 'QUOTIDIEN']).optional(),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
});
exports.getCompanySchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
});

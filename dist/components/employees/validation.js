"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeesSchema = exports.getEmployeeSchema = exports.updateEmployeeSchema = exports.createEmployeeSchema = void 0;
const zod_1 = require("zod");
exports.createEmployeeSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string().min(2, 'Prénom doit contenir au moins 2 caractères'),
        lastName: zod_1.z.string().min(2, 'Nom doit contenir au moins 2 caractères'),
        position: zod_1.z.string().min(2, 'Poste doit contenir au moins 2 caractères'),
        contractType: zod_1.z.enum(['TEMPS_PLEIN', 'TEMPS_PARTIEL', 'CONTRAT']),
        rate: zod_1.z.number().positive('Taux doit être positif'),
        bankAccount: zod_1.z.string().optional(),
        bankName: zod_1.z.string().optional(),
        companyId: zod_1.z.string(),
    }),
});
exports.updateEmployeeSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string().min(2, 'Prénom doit contenir au moins 2 caractères').optional(),
        lastName: zod_1.z.string().min(2, 'Nom doit contenir au moins 2 caractères').optional(),
        position: zod_1.z.string().min(2, 'Poste doit contenir au moins 2 caractères').optional(),
        contractType: zod_1.z.enum(['TEMPS_PLEIN', 'TEMPS_PARTIEL', 'CONTRAT']).optional(),
        rate: zod_1.z.number().positive('Taux doit être positif').optional(),
        bankAccount: zod_1.z.string().optional(),
        bankName: zod_1.z.string().optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
});
exports.getEmployeeSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
});
exports.getEmployeesSchema = zod_1.z.object({
    query: zod_1.z.object({
        status: zod_1.z.enum(['active', 'inactive']).optional(),
        position: zod_1.z.string().optional(),
        contractType: zod_1.z.enum(['TEMPS_PLEIN', 'TEMPS_PARTIEL', 'CONTRAT']).optional(),
        page: zod_1.z.string().transform(Number).optional(),
        limit: zod_1.z.string().transform(Number).optional(),
    }),
});

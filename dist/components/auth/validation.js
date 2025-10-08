"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = exports.registerSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email('Email invalide'),
        password: zod_1.z.string().min(6, 'Mot de passe doit contenir au moins 6 caractères'),
    }),
});
exports.registerSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email('Email invalide'),
        password: zod_1.z.string().min(6, 'Mot de passe doit contenir au moins 6 caractères'),
        firstName: zod_1.z.string().min(2, 'Prénom doit contenir au moins 2 caractères'),
        lastName: zod_1.z.string().min(2, 'Nom doit contenir au moins 2 caractères'),
        role: zod_1.z.enum(['SUPER_ADMINISTRATEUR', 'ADMINISTRATEUR', 'CAISSIER']).optional(),
        companyId: zod_1.z.string().optional(),
    }),
});
exports.createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email('Email invalide'),
        password: zod_1.z.string().min(6, 'Mot de passe doit contenir au moins 6 caractères'),
        firstName: zod_1.z.string().min(2, 'Prénom doit contenir au moins 2 caractères'),
        lastName: zod_1.z.string().min(2, 'Nom doit contenir au moins 2 caractères'),
        role: zod_1.z.enum(['SUPER_ADMINISTRATEUR', 'ADMINISTRATEUR', 'CAISSIER']),
        companyId: zod_1.z.string().optional(),
    }),
});

import { z } from 'zod';

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Email invalide'),
    password: z.string().min(6, 'Mot de passe doit contenir au moins 6 caractères'),
  }),
});

export const registerSchema = z.object({
  body: z.object({
    email: z.string().email('Email invalide'),
    password: z.string().min(6, 'Mot de passe doit contenir au moins 6 caractères'),
    firstName: z.string().min(2, 'Prénom doit contenir au moins 2 caractères'),
    lastName: z.string().min(2, 'Nom doit contenir au moins 2 caractères'),
    role: z.enum(['SUPER_ADMINISTRATEUR', 'ADMINISTRATEUR', 'CAISSIER']).optional(),
    companyId: z.string().optional(),
  }),
});

export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email('Email invalide'),
    password: z.string().min(6, 'Mot de passe doit contenir au moins 6 caractères'),
    firstName: z.string().min(2, 'Prénom doit contenir au moins 2 caractères'),
    lastName: z.string().min(2, 'Nom doit contenir au moins 2 caractères'),
    role: z.enum(['SUPER_ADMINISTRATEUR', 'ADMINISTRATEUR', 'CAISSIER']),
    companyId: z.string().optional(),
  }),
});

export type LoginInput = z.infer<typeof loginSchema>['body'];
export type RegisterInput = z.infer<typeof registerSchema>['body'];
export type CreateUserInput = z.infer<typeof createUserSchema>['body'];
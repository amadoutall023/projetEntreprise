import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validateRequest = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req);
      next();
    } catch (error: any) {
      res.status(400).json({
        message: 'Données de requête invalides',
        errors: error.errors,
      });
    }
  };
};
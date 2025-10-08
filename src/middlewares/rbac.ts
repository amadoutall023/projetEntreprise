import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth';

type Role = 'SUPER_ADMINISTRATEUR' | 'ADMINISTRATEUR' | 'CAISSIER';

export const requireRole = (allowedRoles: Role[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(401).json({ message: 'Non autorisé' });
      return;
    }

    if (!allowedRoles.includes(req.user.role as Role)) {
      res.status(403).json({ message: 'Permissions insuffisantes' });
      return;
    }

    next();
  };
};

export const requireSuperAdmin = requireRole(['SUPER_ADMINISTRATEUR']);
export const requireAdminOrHigher = requireRole(['SUPER_ADMINISTRATEUR', 'ADMINISTRATEUR']);
export const requireCashierOrHigher = requireRole(['SUPER_ADMINISTRATEUR', 'ADMINISTRATEUR', 'CAISSIER']);

// Middleware pour vérifier que l'utilisateur appartient à une entreprise spécifique
export const requireCompanyAccess = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.status(401).json({ message: 'Non autorisé' });
    return;
  }

  // SUPER_ADMINISTRATEUR peut accéder à tout
  if (req.user.role === 'SUPER_ADMINISTRATEUR') {
    next();
    return;
  }

  // Pour les autres rôles, vérifier qu'ils ont une entrepriseId
  if (!req.user.entrepriseId) {
    res.status(403).json({ message: 'Accès entreprise requis' });
    return;
  }

  next();
};

// Middleware pour vérifier l'accès à une ressource spécifique d'entreprise
export const requireResourceAccess = (resourceCompanyId: string) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(401).json({ message: 'Non autorisé' });
      return;
    }

    // SUPER_ADMINISTRATEUR peut accéder à tout
    if (req.user.role === 'SUPER_ADMINISTRATEUR') {
      next();
      return;
    }

    // Vérifier que l'utilisateur appartient à la même entreprise que la ressource
    if (req.user.entrepriseId !== resourceCompanyId) {
      res.status(403).json({ message: 'Accès refusé à cette ressource' });
      return;
    }

    next();
  };
};
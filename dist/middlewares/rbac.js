"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireResourceAccess = exports.requireCompanyAccess = exports.requireCashierOrHigher = exports.requireAdminOrHigher = exports.requireSuperAdmin = exports.requireRole = void 0;
const requireRole = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            res.status(401).json({ message: 'Non autorisé' });
            return;
        }
        if (!allowedRoles.includes(req.user.role)) {
            res.status(403).json({ message: 'Permissions insuffisantes' });
            return;
        }
        next();
    };
};
exports.requireRole = requireRole;
exports.requireSuperAdmin = (0, exports.requireRole)(['SUPER_ADMINISTRATEUR']);
exports.requireAdminOrHigher = (0, exports.requireRole)(['SUPER_ADMINISTRATEUR', 'ADMINISTRATEUR']);
exports.requireCashierOrHigher = (0, exports.requireRole)(['SUPER_ADMINISTRATEUR', 'ADMINISTRATEUR', 'CAISSIER']);
// Middleware pour vérifier que l'utilisateur appartient à une entreprise spécifique
const requireCompanyAccess = (req, res, next) => {
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
exports.requireCompanyAccess = requireCompanyAccess;
// Middleware pour vérifier l'accès à une ressource spécifique d'entreprise
const requireResourceAccess = (resourceCompanyId) => {
    return (req, res, next) => {
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
exports.requireResourceAccess = requireResourceAccess;

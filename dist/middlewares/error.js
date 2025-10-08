"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHandler = void 0;
const errorHandler = (error, req, res, next) => {
    console.error('Error:', error);
    if (error.name === 'ValidationError') {
        res.status(400).json({
            message: 'Erreur de validation',
            errors: error.errors,
        });
        return;
    }
    if (error.name === 'UnauthorizedError') {
        res.status(401).json({ message: 'Non autorisé' });
        return;
    }
    res.status(500).json({
        message: 'Erreur interne du serveur',
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
    });
};
exports.errorHandler = errorHandler;
const notFoundHandler = (req, res) => {
    res.status(404).json({ message: 'Route non trouvée' });
};
exports.notFoundHandler = notFoundHandler;

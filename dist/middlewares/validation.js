"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const validateRequest = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req);
            next();
        }
        catch (error) {
            res.status(400).json({
                message: 'Données de requête invalides',
                errors: error.errors,
            });
        }
    };
};
exports.validateRequest = validateRequest;

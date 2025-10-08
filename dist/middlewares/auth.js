"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const service_1 = require("../components/auth/service");
const authService = new service_1.AuthService();
const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ message: 'Token manquant' });
            return;
        }
        const token = authHeader.substring(7);
        const decoded = authService.verifyToken(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Token invalide' });
    }
};
exports.authenticate = authenticate;

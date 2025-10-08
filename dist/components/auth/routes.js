"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const validation_2 = require("../../middlewares/validation");
const auth_1 = require("../../middlewares/auth");
const rbac_1 = require("../../middlewares/rbac");
const router = (0, express_1.Router)();
const authController = new controller_1.AuthController();
// Routes publiques
router.post('/login', (0, validation_2.validateRequest)(validation_1.loginSchema), authController.login.bind(authController));
router.post('/register', (0, validation_2.validateRequest)(validation_1.registerSchema), authController.register.bind(authController));
// Routes protégées (nécessitent authentification)
router.get('/profile', auth_1.authenticate, authController.getProfile.bind(authController));
// Routes pour créer des utilisateurs (nécessitent des permissions spécifiques)
router.post('/users', auth_1.authenticate, rbac_1.requireAdminOrHigher, (0, validation_2.validateRequest)(validation_1.createUserSchema), authController.createUser.bind(authController));
exports.default = router;

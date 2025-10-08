"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const validation_2 = require("../../middlewares/validation");
const auth_1 = require("../../middlewares/auth");
const rbac_1 = require("../../middlewares/rbac");
const upload_1 = require("../../middlewares/upload");
const router = (0, express_1.Router)();
const companyController = new controller_1.CompanyController();
// Routes protégées
router.use(auth_1.authenticate);
// Routes SUPER_ADMIN seulement
router.post('/', rbac_1.requireSuperAdmin, (0, validation_2.validateRequest)(validation_1.createCompanySchema), companyController.createCompany.bind(companyController));
router.get('/', rbac_1.requireSuperAdmin, companyController.getAllCompanies.bind(companyController));
// Routes avec vérification d'accès entreprise
router.get('/:id', (0, validation_2.validateRequest)(validation_1.getCompanySchema), companyController.getCompanyById.bind(companyController));
router.put('/:id', (0, validation_2.validateRequest)(validation_1.updateCompanySchema), companyController.updateCompany.bind(companyController));
router.delete('/:id', (0, validation_2.validateRequest)(validation_1.getCompanySchema), companyController.deleteCompany.bind(companyController));
router.post('/:id/logo', upload_1.uploadLogo.single('logo'), companyController.uploadLogo.bind(companyController));
exports.default = router;

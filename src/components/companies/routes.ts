import { Router } from 'express';
import { CompanyController } from './controller';
import { createCompanySchema, updateCompanySchema, getCompanySchema } from './validation';
import { validateRequest } from '../../middlewares/validation';
import { authenticate } from '../../middlewares/auth';
import { requireSuperAdmin } from '../../middlewares/rbac';
import { uploadLogo } from '../../middlewares/upload';

const router = Router();
const companyController = new CompanyController();

// Routes protégées
router.use(authenticate);

// Routes SUPER_ADMIN seulement
router.post('/', requireSuperAdmin, validateRequest(createCompanySchema), companyController.createCompany.bind(companyController));
router.get('/', requireSuperAdmin, companyController.getAllCompanies.bind(companyController));

// Routes avec vérification d'accès entreprise
router.get('/:id', validateRequest(getCompanySchema), companyController.getCompanyById.bind(companyController));
router.put('/:id', validateRequest(updateCompanySchema), companyController.updateCompany.bind(companyController));
router.delete('/:id', validateRequest(getCompanySchema), companyController.deleteCompany.bind(companyController));
router.post('/:id/logo', uploadLogo.single('logo'), companyController.uploadLogo.bind(companyController));

export default router;
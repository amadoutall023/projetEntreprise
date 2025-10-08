import { Router } from 'express';
import { AuthController } from './controller';
import { loginSchema, registerSchema, createUserSchema } from './validation';
import { validateRequest } from '../../middlewares/validation';
import { authenticate } from '../../middlewares/auth';
import { requireAdminOrHigher } from '../../middlewares/rbac';

const router = Router();
const authController = new AuthController();

// Routes publiques
router.post('/login', validateRequest(loginSchema), authController.login.bind(authController));
router.post('/register', validateRequest(registerSchema), authController.register.bind(authController));

// Routes protégées (nécessitent authentification)
router.get('/profile', authenticate, authController.getProfile.bind(authController));

// Routes pour créer des utilisateurs (nécessitent des permissions spécifiques)
router.post('/users', authenticate, requireAdminOrHigher, validateRequest(createUserSchema), authController.createUser.bind(authController));

export default router;
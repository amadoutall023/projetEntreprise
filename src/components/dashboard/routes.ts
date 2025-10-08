import { Router } from 'express';
import { DashboardController } from './controller';
import { authenticate } from '../../middlewares/auth';
import { requireCompanyAccess } from '../../middlewares/rbac';

const router = Router();
const dashboardController = new DashboardController();

router.use(authenticate);
router.use(requireCompanyAccess);

router.get('/kpis', dashboardController.getKPIs.bind(dashboardController));

export default router;
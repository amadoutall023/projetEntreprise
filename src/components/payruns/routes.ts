import { Router } from 'express';
import { PayRunController } from './controller';
import { createPayRunSchema, updatePayRunSchema } from './validation';
import { validateRequest } from '../../middlewares/validation';
import { authenticate } from '../../middlewares/auth';
import { requireCompanyAccess } from '../../middlewares/rbac';

const router = Router();
const payRunController = new PayRunController();

router.use(authenticate);
router.use(requireCompanyAccess);

router.post('/', validateRequest(createPayRunSchema), payRunController.createPayRun.bind(payRunController));
router.get('/', payRunController.getPayRuns.bind(payRunController));
router.get('/:id', payRunController.getPayRunById.bind(payRunController));
router.put('/:id', validateRequest(updatePayRunSchema), payRunController.updatePayRun.bind(payRunController));
router.delete('/:id', payRunController.deletePayRun.bind(payRunController));
router.post('/:id/generate-payslips', payRunController.generatePayslips.bind(payRunController));

export default router;
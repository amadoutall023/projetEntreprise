import { Router } from 'express';
import { PayslipController } from './controller';
import { updatePayslipSchema } from './validation';
import { validateRequest } from '../../middlewares/validation';
import { authenticate } from '../../middlewares/auth';
import { requireCompanyAccess } from '../../middlewares/rbac';

const router = Router();
const payslipController = new PayslipController();

router.use(authenticate);
router.use(requireCompanyAccess);

router.get('/', payslipController.getPayslips.bind(payslipController));
router.get('/:id', payslipController.getPayslipById.bind(payslipController));
router.put('/:id', validateRequest(updatePayslipSchema), payslipController.updatePayslip.bind(payslipController));
router.post('/:id/recalculate', payslipController.recalculatePayslip.bind(payslipController));
router.get('/:id/pdf', payslipController.generatePayslipPDF.bind(payslipController));

export default router;
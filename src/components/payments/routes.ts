import { Router } from 'express';
import { PaymentController } from './controller';
import { authenticate } from '../../middlewares/auth';
import { requireCompanyAccess } from '../../middlewares/rbac';

const router = Router();
const paymentController = new PaymentController();

router.use(authenticate);
router.use(requireCompanyAccess);

router.post('/', paymentController.createPayment.bind(paymentController));
router.post('/mark-paid', paymentController.markEmployeeAsPaid.bind(paymentController));
router.get('/', paymentController.getPayments.bind(paymentController));
router.get('/employee/:employeeId/status', paymentController.getEmployeePaymentStatus.bind(paymentController));
router.get('/:id/receipt-pdf', paymentController.generatePaymentReceiptPDF.bind(paymentController));
router.get('/list-pdf', paymentController.generatePaymentListPDF.bind(paymentController));

export default router;
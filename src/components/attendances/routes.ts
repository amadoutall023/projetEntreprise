import { Router } from 'express';
import { AttendanceController } from './controller';
import { createAttendanceSchema, getAttendancesSchema, updateAttendanceSchema } from './validation';
import { validateRequest } from '../../middlewares/validation';
import { authenticate } from '../../middlewares/auth';
import { requireCompanyAccess } from '../../middlewares/rbac';

const router = Router();
const attendanceController = new AttendanceController();

router.use(authenticate);
router.use(requireCompanyAccess);

router.post('/', validateRequest(createAttendanceSchema), attendanceController.createAttendance.bind(attendanceController));
router.get('/', validateRequest(getAttendancesSchema), attendanceController.getAttendances.bind(attendanceController));
router.get('/:id', attendanceController.getAttendanceById.bind(attendanceController));
router.put('/:id', validateRequest(updateAttendanceSchema), attendanceController.updateAttendance.bind(attendanceController));

// Routes spéciales pour les rapports
router.get('/reports/daily', attendanceController.getDailyReport.bind(attendanceController));
router.get('/reports/monthly/:employeeId/:year/:month', attendanceController.getMonthlyReport.bind(attendanceController));

export default router;
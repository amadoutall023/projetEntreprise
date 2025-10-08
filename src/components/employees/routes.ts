import { Router } from 'express';
import { EmployeeController } from './controller';
import { createEmployeeSchema, updateEmployeeSchema, getEmployeeSchema, getEmployeesSchema } from './validation';
import { validateRequest } from '../../middlewares/validation';
import { authenticate } from '../../middlewares/auth';
import { requireCompanyAccess } from '../../middlewares/rbac';

const router = Router();
const employeeController = new EmployeeController();

// Routes protégées
router.use(authenticate);
router.use(requireCompanyAccess);

router.post('/', validateRequest(createEmployeeSchema), employeeController.createEmployee.bind(employeeController));
router.get('/', validateRequest(getEmployeesSchema), employeeController.getEmployees.bind(employeeController));
router.get('/:id', validateRequest(getEmployeeSchema), employeeController.getEmployeeById.bind(employeeController));
router.put('/:id', validateRequest(updateEmployeeSchema), employeeController.updateEmployee.bind(employeeController));
router.delete('/:id', validateRequest(getEmployeeSchema), employeeController.deleteEmployee.bind(employeeController));
router.patch('/:id/toggle-status', validateRequest(getEmployeeSchema), employeeController.toggleEmployeeStatus.bind(employeeController));

export default router;
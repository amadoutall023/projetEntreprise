import { Response } from 'express';
import { EmployeeService } from './service';
import { AuthRequest } from '../../middlewares/auth';

const employeeService = new EmployeeService();

export class EmployeeController {
  async createEmployee(req: AuthRequest, res: Response): Promise<void> {
    try {
      const employeeData = req.body;

      // Vérifier que l'utilisateur peut créer dans cette entreprise
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== employeeData.companyId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      const employee = await employeeService.createEmployee(employeeData);
      res.status(201).json(employee);
    } catch (error) {
      console.error('Create employee error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getEmployees(req: AuthRequest, res: Response): Promise<void> {
    try {
      const filters = req.query;
      let companyId = filters.companyId as string;

      // Si pas SUPER_ADMINISTRATEUR, forcer le filtrage par entreprise de l'utilisateur
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR') {
        if (!req.user?.entrepriseId) {
          res.status(403).json({ message: 'Accès entreprise requis' });
          return;
        }
        companyId = req.user.entrepriseId;
      }

      const result = await employeeService.getEmployees({
        ...filters,
        companyId,
      });

      res.json(result);
    } catch (error) {
      console.error('Get employees error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getEmployeeById(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const employee = await employeeService.getEmployeeById(id);

      if (!employee) {
        res.status(404).json({ message: 'Employé non trouvé' });
        return;
      }

      // Vérifier l'accès à l'employé
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== employee.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      res.json(employee);
    } catch (error) {
      console.error('Get employee error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async updateEmployee(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updateData = req.body;

      // Vérifier l'accès à l'employé
      const employee = await employeeService.getEmployeeById(id);
      if (!employee) {
        res.status(404).json({ message: 'Employé non trouvé' });
        return;
      }

      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== employee.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      const updatedEmployee = await employeeService.updateEmployee(id, updateData);
      res.json(updatedEmployee);
    } catch (error) {
      console.error('Update employee error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async deleteEmployee(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      // Vérifier l'accès à l'employé
      const employee = await employeeService.getEmployeeById(id);
      if (!employee) {
        res.status(404).json({ message: 'Employé non trouvé' });
        return;
      }

      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== employee.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      await employeeService.deleteEmployee(id);
      res.status(204).send();
    } catch (error) {
      console.error('Delete employee error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async toggleEmployeeStatus(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      // Vérifier l'accès à l'employé
      const employee = await employeeService.getEmployeeById(id);
      if (!employee) {
        res.status(404).json({ message: 'Employé non trouvé' });
        return;
      }

      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== employee.entrepriseId) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      const updatedEmployee = await employeeService.toggleEmployeeStatus(id);
      res.json(updatedEmployee);
    } catch (error) {
      console.error('Toggle employee status error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }
}
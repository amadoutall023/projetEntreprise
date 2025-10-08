import { Response } from 'express';
import { CompanyService } from './service';
import { AuthRequest } from '../../middlewares/auth';
import { requireSuperAdmin, requireResourceAccess } from '../../middlewares/rbac';
import { uploadLogo, processUploadedLogo } from '../../middlewares/upload';

const companyService = new CompanyService();

export class CompanyController {
  async createCompany(req: AuthRequest, res: Response): Promise<void> {
    try {
      const companyData = req.body;
      const company = await companyService.createCompany(companyData);

      res.status(201).json(company);
    } catch (error) {
      console.error('Create company error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getAllCompanies(req: AuthRequest, res: Response): Promise<void> {
    try {
      const companies = await companyService.getAllCompanies();
      res.json(companies);
    } catch (error) {
      console.error('Get companies error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getCompanyById(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const company = await companyService.getCompanyById(id);

      if (!company) {
        res.status(404).json({ message: 'Entreprise non trouvée' });
        return;
      }

      // Vérifier l'accès à l'entreprise
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== id) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      res.json(company);
    } catch (error) {
      console.error('Get company error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async updateCompany(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updateData = req.body;

      // Vérifier l'accès à l'entreprise
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== id) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      const company = await companyService.updateCompany(id, updateData);
      res.json(company);
    } catch (error) {
      console.error('Update company error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async deleteCompany(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      // Vérifier l'accès à l'entreprise
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== id) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      await companyService.deleteCompany(id);
      res.status(204).send();
    } catch (error) {
      console.error('Delete company error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async uploadLogo(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      // Vérifier l'accès à l'entreprise
      if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== id) {
        res.status(403).json({ message: 'Accès refusé' });
        return;
      }

      if (!req.file) {
        res.status(400).json({ message: 'Aucun fichier fourni' });
        return;
      }

      // Traiter et optimiser l'image
      const filename = await processUploadedLogo(req.file);
      const logoPath = `/uploads/logos/${filename}`;

      const company = await companyService.updateCompany(id, { logo: logoPath });

      res.json({ message: 'Logo uploadé avec succès', company });
    } catch (error) {
      console.error('Upload logo error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }
}
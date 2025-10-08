"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const service_1 = require("./service");
const upload_1 = require("../../middlewares/upload");
const companyService = new service_1.CompanyService();
class CompanyController {
    async createCompany(req, res) {
        try {
            const companyData = req.body;
            const company = await companyService.createCompany(companyData);
            res.status(201).json(company);
        }
        catch (error) {
            console.error('Create company error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
    async getAllCompanies(req, res) {
        try {
            const companies = await companyService.getAllCompanies();
            res.json(companies);
        }
        catch (error) {
            console.error('Get companies error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
    async getCompanyById(req, res) {
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
        }
        catch (error) {
            console.error('Get company error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
    async updateCompany(req, res) {
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
        }
        catch (error) {
            console.error('Update company error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
    async deleteCompany(req, res) {
        try {
            const { id } = req.params;
            // Vérifier l'accès à l'entreprise
            if (req.user?.role !== 'SUPER_ADMINISTRATEUR' && req.user?.entrepriseId !== id) {
                res.status(403).json({ message: 'Accès refusé' });
                return;
            }
            await companyService.deleteCompany(id);
            res.status(204).send();
        }
        catch (error) {
            console.error('Delete company error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
    async uploadLogo(req, res) {
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
            const filename = await (0, upload_1.processUploadedLogo)(req.file);
            const logoPath = `/uploads/logos/${filename}`;
            const company = await companyService.updateCompany(id, { logo: logoPath });
            res.json({ message: 'Logo uploadé avec succès', company });
        }
        catch (error) {
            console.error('Upload logo error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
}
exports.CompanyController = CompanyController;

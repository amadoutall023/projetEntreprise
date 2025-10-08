"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const service_1 = require("./service");
const dashboardService = new service_1.DashboardService();
class DashboardController {
    async getKPIs(req, res) {
        try {
            let companyId;
            if (req.user?.role !== 'SUPER_ADMINISTRATEUR') {
                companyId = req.user?.entrepriseId;
            }
            const kpis = await dashboardService.getKPIs(companyId);
            res.json(kpis);
        }
        catch (error) {
            console.error('Get KPIs error:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
}
exports.DashboardController = DashboardController;

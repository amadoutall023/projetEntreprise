"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
// Import des routes
const routes_1 = __importDefault(require("./components/auth/routes"));
const routes_2 = __importDefault(require("./components/companies/routes"));
const routes_3 = __importDefault(require("./components/employees/routes"));
const routes_4 = __importDefault(require("./components/payruns/routes"));
const routes_5 = __importDefault(require("./components/payslips/routes"));
const routes_6 = __importDefault(require("./components/payments/routes"));
const routes_7 = __importDefault(require("./components/dashboard/routes"));
const routes_8 = __importDefault(require("./components/attendances/routes"));
// Import des middlewares
const error_1 = require("./middlewares/error");
// Configuration
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Initialisation du super-admin au démarrage
const init_1 = require("./utils/init");
(0, init_1.initializeSuperAdmin)();
// Middlewares globaux
app.use((0, compression_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Servir les fichiers statiques (uploads) avec cache
app.use('/uploads', express_1.default.static('uploads', {
    maxAge: '1d', // Cache pendant 1 jour
    etag: true,
    lastModified: true,
}));
// Routes API
app.use('/api/auth', routes_1.default);
app.use('/api/companies', routes_2.default);
app.use('/api/employees', routes_3.default);
app.use('/api/payruns', routes_4.default);
app.use('/api/payslips', routes_5.default);
app.use('/api/payments', routes_6.default);
app.use('/api/dashboard', routes_7.default);
app.use('/api/attendances', routes_8.default);
// Route de santé
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
// Gestion des erreurs
app.use(error_1.notFoundHandler);
app.use(error_1.errorHandler);
// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
});

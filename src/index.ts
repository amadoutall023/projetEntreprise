import express from 'express';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';

// Import des routes
import authRoutes from './components/auth/routes';
import companyRoutes from './components/companies/routes';
import employeeRoutes from './components/employees/routes';
import payRunRoutes from './components/payruns/routes';
import payslipRoutes from './components/payslips/routes';
import paymentRoutes from './components/payments/routes';
import dashboardRoutes from './components/dashboard/routes';
import attendanceRoutes from './components/attendances/routes';

// Import des middlewares
import { errorHandler, notFoundHandler } from './middlewares/error';

// Configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialisation du super-admin au démarrage
import { initializeSuperAdmin } from './utils/init';
initializeSuperAdmin();

// Middlewares globaux
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques (uploads) avec cache
app.use('/uploads', express.static('uploads', {
  maxAge: '1d', // Cache pendant 1 jour
  etag: true,
  lastModified: true,
}));

// Routes API
app.use('/api/auth', authRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/payruns', payRunRoutes);
app.use('/api/payslips', payslipRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/attendances', attendanceRoutes);

// Route de santé
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Gestion des erreurs
app.use(notFoundHandler);
app.use(errorHandler);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});
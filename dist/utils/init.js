"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeSuperAdmin = initializeSuperAdmin;
const service_1 = require("../components/auth/service");
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const authService = new service_1.AuthService();
async function initializeSuperAdmin() {
    try {
        // Vérifier si un super-admin existe déjà
        const existingSuperAdmin = await prisma.utilisateur.findFirst({
            where: { role: 'SUPER_ADMINISTRATEUR' },
        });
        if (existingSuperAdmin) {
            console.log('✅ Super-admin déjà initialisé');
            return;
        }
        // Créer le super-admin par défaut
        const superAdmin = await authService.createUser({
            email: 'admin@projetsalaire.com',
            password: 'Admin123!',
            firstName: 'Super',
            lastName: 'Admin',
            role: 'SUPER_ADMINISTRATEUR',
        });
        console.log('✅ Super-admin créé avec succès:');
        console.log(`   Email: ${superAdmin.email}`);
        console.log(`   Mot de passe: Admin123!`);
        console.log('   ⚠️  Changez ce mot de passe en production !');
    }
    catch (error) {
        console.error('❌ Erreur lors de l\'initialisation du super-admin:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
// Exécuter si appelé directement
if (require.main === module) {
    initializeSuperAdmin();
}

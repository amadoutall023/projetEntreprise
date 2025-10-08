

- **Node.js** + **TypeScript**
- **Express.js** - Framework web
- **Prisma ORM** - Base de données MySQL
- **JWT** - Authentification
- **bcrypt** - Hashage des mots de passe
- **Zod** - Validation des données
- **PDFKit** - Génération de PDF

## 📋 Prérequis

- Node.js 18+
- MySQL 8.0+
- npm ou yarn

## 🛠️ Installation

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd projetEntrepriseBackend
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration de la base de données**
   - Créer une base de données MySQL
   - Modifier `.env` avec vos paramètres :
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/votre_base"
   JWT_SECRET="votre-secret-jwt"
   PORT=3000
   ```

4. **Migration de la base de données**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Générer le client Prisma**
   ```bash
   npx prisma generate
   ```

6. **Démarrer le serveur**
   ```bash
   npm run dev  # Mode développement
   npm run build && npm start  # Mode production
   ```

##  Utilisateur par défaut_________________________________________________breukh kay fii

Un super-administrateur est créé automatiquement au démarrage :
- **Email** : admin@projetsalaire.com
- **Mot de passe** : Admin123!




ISC

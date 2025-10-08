# API Backend Gestion des Salaires Multi-Entreprises

Une API REST complète pour la gestion des salaires avec authentification JWT, RBAC, et génération de documents PDF.

## 🚀 Technologies utilisées

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

## 👤 Utilisateur par défaut

Un super-administrateur est créé automatiquement au démarrage :
- **Email** : admin@projetsalaire.com
- **Mot de passe** : Admin123!
- ⚠️ Changez ce mot de passe en production !

## 📚 API Endpoints

### Authentification

**POST /api/auth/login**
- Body: `email` (string, email), `password` (string, min 6)

**POST /api/auth/register**
- Body: `email` (string, email), `password` (string, min 6), `firstName` (string, min 2), `lastName` (string, min 2), `role?` (enum: SUPER_ADMINISTRATEUR, ADMINISTRATEUR, CAISSIER), `companyId?` (string)

**GET /api/auth/profile**
- Headers: Authorization (Bearer token)

### Entreprises (Companies)

**POST /api/companies** (SUPER_ADMIN)
- Body: `name` (string, min 2), `logo?` (string), `address?` (string), `currency?` (string, default: XOF), `payPeriodType?` (enum: MENSUEL, HEBDOMADAIRE, QUOTIDIEN, default: MENSUEL)

**GET /api/companies** (SUPER_ADMIN)
- Query: aucun

**GET /api/companies/:id**
- Params: `id` (string)

**PUT /api/companies/:id**
- Params: `id` (string)
- Body: `name?` (string, min 2), `logo?` (string), `address?` (string), `currency?` (string), `payPeriodType?` (enum: MENSUEL, HEBDOMADAIRE, QUOTIDIEN)

**DELETE /api/companies/:id**
- Params: `id` (string, ex: cln5j9hzr0000x8k8s8i12345)

### Employés (Employees)

**POST /api/employees**
- Body: `firstName` (string, min 2), `lastName` (string, min 2), `position` (string, min 2), `contractType` (enum: TEMPS_PLEIN, TEMPS_PARTIEL, CONTRAT), `rate` (number, positif), `bankAccount?` (string), `bankName?` (string), `companyId` (string)

**GET /api/employees**
- Query: `status?` (enum: active, inactive), `position?` (string), `contractType?` (enum: TEMPS_PLEIN, TEMPS_PARTIEL, CONTRAT), `page?` (number), `limit?` (number)

**GET /api/employees/:id**
- Params: `id` (string)

**PUT /api/employees/:id**
- Params: `id` (string)
- Body: `firstName?` (string, min 2), `lastName?` (string, min 2), `position?` (string, min 2), `contractType?` (enum: TEMPS_PLEIN, TEMPS_PARTIEL, CONTRAT), `rate?` (number, positif), `bankAccount?` (string), `bankName?` (string), `isActive?` (boolean)

**DELETE /api/employees/:id**
- Params: `id` (string)

**PATCH /api/employees/:id/toggle-status**
- Params: `id` (string)

### Cycles de paie (Pay Runs)

**POST /api/payruns**
- Body: `name` (string, min 2), `startDate` (string, datetime), `endDate` (string, datetime), `companyId` (string)

**GET /api/payruns**
- Query: aucun

**GET /api/payruns/:id**
- Params: `id` (string)

**PUT /api/payruns/:id**
- Params: `id` (string)
- Body: `name?` (string, min 2), `startDate?` (string, datetime), `endDate?` (string, datetime), `status?` (enum: BROUILLON, APPROUVE, FERME)

**DELETE /api/payruns/:id**
- Params: `id` (string)

**POST /api/payruns/:id/generate-payslips**
- Params: `id` (string)

### Bulletins de paie (Payslips)

**GET /api/payslips**
- Query: aucun

**GET /api/payslips/:id**
- Params: `id` (string)

**PUT /api/payslips/:id**
- Params: `id` (string)
- Body: `grossAmount?` (number), `deductions?` (number), `netAmount?` (number), `workedDays?` (number)

**GET /api/payslips/:id/pdf**
- Params: `id` (string)

### Paiements (Payments)

**POST /api/payments**
- Body: `payslipId` (string), `amount` (number), `method` (enum: ESPECES, VIREMENT, MOBILE_MONEY), `reference?` (string), `notes?` (string)

**GET /api/payments**
- Query: `payslipId?` (string)

**GET /api/payments/:id/receipt-pdf**
- Params: `id` (string)

**GET /api/payments/list-pdf**
- Query: aucun

### Dashboard (KPI)

**GET /api/dashboard/kpis**
- Query: aucun
- Headers: Authorization (Bearer token)

## 🧪 Exemples de test des endpoints

### Configuration de base
```bash
# URL de base
BASE_URL="http://localhost:3000"

# Token JWT (à obtenir après login)
TOKEN="your-jwt-token-here"
```

### 📝 Notes importantes
- **IDs d'exemple** : Les IDs utilisés dans les exemples (comme `cln5j9hzr0000x8k8s8i12345`) sont des exemples fictifs. Remplacez-les par les vrais IDs retournés par l'API.
- **Ordre d'exécution** : Suivez l'ordre logique : créer entreprise → créer employé → créer cycle de paie → générer bulletins → enregistrer paiements.
- **Authentification** : Tous les endpoints sauf login/register nécessitent un token JWT valide.
- **Rôles** : Certains endpoints sont réservés aux SUPER_ADMINISTRATEUR uniquement.

### 1. Authentification

#### Login
```bash
curl -X POST $BASE_URL/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@projetsalaire.com",
    "password": "Admin123!"
  }'
```

#### Register (Créer un nouvel utilisateur)
```bash
curl -X POST $BASE_URL/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test123!",
    "firstName": "Jean",
    "lastName": "Dupont",
    "role": "ADMINISTRATEUR",
    "companyId": "cln5j9hzr0000x8k8s8i12345"
  }'
```

#### Profile (Obtenir le profil utilisateur)
```bash
curl -X GET $BASE_URL/api/auth/profile \
  -H "Authorization: Bearer $TOKEN"
```

### 2. Gestion des entreprises

#### Créer une entreprise (SUPER_ADMIN uniquement)
```bash
curl -X POST $BASE_URL/api/companies \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Tech Solutions SARL",
    "address": "123 Avenue de la République, Dakar, Sénégal",
    "currency": "XOF",
    "payPeriodType": "MENSUEL"
  }'
```

#### Lister les entreprises (SUPER_ADMIN uniquement)
```bash
curl -X GET $BASE_URL/api/companies \
  -H "Authorization: Bearer $TOKEN"
```

#### Détails d'une entreprise
```bash
curl -X GET $BASE_URL/api/companies/cln5j9hzr0000x8k8s8i12345 \
  -H "Authorization: Bearer $TOKEN"
```

#### Modifier une entreprise
```bash
curl -X PUT $BASE_URL/api/companies/cln5j9hzr0000x8k8s8i12345 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Tech Solutions SARL - Dakar",
    "address": "456 Boulevard de la Liberté, Dakar, Sénégal"
  }'
```

### 3. Gestion des employés

#### Créer un employé
```bash
curl -X POST $BASE_URL/api/employees \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Marie",
    "lastName": "Martin",
    "position": "Développeur Full Stack",
    "contractType": "TEMPS_PLEIN",
    "rate": 150000,
    "bankAccount": "SN123456789012345678901234567",
    "bankName": "CBAO - Dakar",
    "companyId": "cln5j9hzr0000x8k8s8i12345"
  }'
```

#### Lister les employés (avec filtres)
```bash
# Tous les employés actifs
curl -X GET "$BASE_URL/api/employees?status=active" \
  -H "Authorization: Bearer $TOKEN"

# Employés par poste
curl -X GET "$BASE_URL/api/employees?position=Développeur" \
  -H "Authorization: Bearer $TOKEN"

# Avec pagination
curl -X GET "$BASE_URL/api/employees?page=1&limit=10" \
  -H "Authorization: Bearer $TOKEN"
```

#### Détails d'un employé
```bash
curl -X GET $BASE_URL/api/employees/cln5j9hzr0000x8k8s8i12346 \
  -H "Authorization: Bearer $TOKEN"
```

#### Modifier un employé
```bash
curl -X PUT $BASE_URL/api/employees/cln5j9hzr0000x8k8s8i12346 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "position": "Senior Développeur Full Stack",
    "rate": 200000
  }'
```

#### Activer/désactiver un employé
```bash
curl -X PATCH $BASE_URL/api/employees/cln5j9hzr0000x8k8s8i12346/toggle-status \
  -H "Authorization: Bearer $TOKEN"
```

### 4. Gestion des cycles de paie

#### Créer un cycle de paie
```bash
curl -X POST $BASE_URL/api/payruns \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Paie Décembre 2024",
    "startDate": "2024-12-01T00:00:00.000Z",
    "endDate": "2024-12-31T23:59:59.000Z",
    "companyId": "cln5j9hzr0000x8k8s8i12345"
  }'
```

#### Lister les cycles de paie
```bash
curl -X GET $BASE_URL/api/payruns \
  -H "Authorization: Bearer $TOKEN"
```

#### Générer les bulletins de paie
```bash
curl -X POST $BASE_URL/api/payruns/cln5j9hzr0000x8k8s8i12347/generate-payslips \
  -H "Authorization: Bearer $TOKEN"
```

### 5. Gestion des bulletins de paie

#### Lister les bulletins
```bash
curl -X GET $BASE_URL/api/payslips \
  -H "Authorization: Bearer $TOKEN"
```

#### Télécharger un bulletin PDF
```bash
curl -X GET $BASE_URL/api/payslips/cln5j9hzr0000x8k8s8i12348/pdf \
  -H "Authorization: Bearer $TOKEN" \
  -o bulletin-paie-decembre-2024.pdf
```

#### Modifier un bulletin
```bash
curl -X PUT $BASE_URL/api/payslips/cln5j9hzr0000x8k8s8i12348 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "deductions": 5000,
    "workedDays": 22
  }'
```

### 6. Gestion des paiements

#### Enregistrer un paiement
```bash
curl -X POST $BASE_URL/api/payments \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "payslipId": "cln5j9hzr0000x8k8s8i12348",
    "amount": 145000,
    "method": "VIREMENT",
    "reference": "VIR-2024-12-001",
    "notes": "Paiement salaire décembre 2024"
  }'
```

#### Lister les paiements
```bash
# Tous les paiements
curl -X GET $BASE_URL/api/payments \
  -H "Authorization: Bearer $TOKEN"

# Paiements pour un bulletin spécifique
curl -X GET "$BASE_URL/api/payments?payslipId=cln5j9hzr0000x8k8s8i12348" \
  -H "Authorization: Bearer $TOKEN"
```

#### Télécharger un reçu PDF
```bash
curl -X GET $BASE_URL/api/payments/cln5j9hzr0000x8k8s8i12349/receipt-pdf \
  -H "Authorization: Bearer $TOKEN" \
  -o recu-paiement-decembre-2024.pdf
```

#### Télécharger la liste des paiements PDF
```bash
curl -X GET $BASE_URL/api/payments/list-pdf \
  -H "Authorization: Bearer $TOKEN" \
  -o liste-paiements.pdf
```

### 7. Dashboard et KPI

#### Obtenir les indicateurs clés
```bash
curl -X GET $BASE_URL/api/dashboard/kpis \
  -H "Authorization: Bearer $TOKEN"
```

### 8. Health Check

#### Vérifier l'état du serveur
```bash
curl -X GET $BASE_URL/health
```

## 🔐 Rôles et permissions (RBAC)

- **SUPER_ADMINISTRATEUR** : Accès complet à toutes les entreprises
- **ADMINISTRATEUR** : Gestion complète de son entreprise
- **CAISSIER** : Lecture seule + gestion des paiements

## 📄 Génération PDF

- **Bulletins de paie** individuels
- **Reçus de paiement**
- **Listes de paiements** (par entreprise)

## 🏗️ Architecture

```
src/
├── components/          # Composants métier
│   ├── auth/           # Authentification
│   ├── companies/      # Gestion entreprises
│   ├── employees/      # Gestion employés
│   ├── payruns/        # Cycles de paie
│   ├── payslips/       # Bulletins de paie
│   ├── payments/       # Paiements
│   └── dashboard/      # Indicateurs
├── middlewares/        # Middlewares Express
├── utils/             # Utilitaires (PDF, etc.)
├── types/             # Types TypeScript
└── index.ts           # Point d'entrée
```

## 🧪 Scripts disponibles

```bash
npm run dev      # Démarrage développement (avec nodemon)
npm run build    # Compilation TypeScript
npm start        # Démarrage production
```

## 🔍 Health Check

```
GET /health
```

## 📝 Validation des données

Toutes les entrées sont validées avec **Zod** pour garantir la sécurité et la cohérence des données.

## 🌍 Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|---------|
| `DATABASE_URL` | URL de connexion MySQL | - |
| `JWT_SECRET` | Clé secrète JWT | - |
| `PORT` | Port du serveur | 3000 |

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Commit les changements
4. Push et créer une PR

## 📄 Licence

ISC
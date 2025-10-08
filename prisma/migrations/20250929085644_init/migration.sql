-- CreateTable
CREATE TABLE `utilisateurs` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `motDePasse` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMINISTRATEUR', 'ADMINISTRATEUR', 'CAISSIER') NOT NULL DEFAULT 'CAISSIER',
    `entrepriseId` VARCHAR(191) NULL,
    `estActif` BOOLEAN NOT NULL DEFAULT true,
    `creeLe` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `misAJourLe` DATETIME(3) NOT NULL,

    UNIQUE INDEX `utilisateurs_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entreprises` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NULL,
    `adresse` VARCHAR(191) NULL,
    `devise` VARCHAR(191) NOT NULL DEFAULT 'XOF',
    `typePeriodePaie` ENUM('MENSUEL', 'HEBDOMADAIRE', 'QUOTIDIEN') NOT NULL DEFAULT 'MENSUEL',
    `creeLe` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `misAJourLe` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employes` (
    `id` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `poste` VARCHAR(191) NOT NULL,
    `typeContrat` ENUM('TEMPS_PLEIN', 'TEMPS_PARTIEL', 'CONTRAT') NOT NULL DEFAULT 'TEMPS_PLEIN',
    `taux` DOUBLE NOT NULL,
    `compteBancaire` VARCHAR(191) NULL,
    `nomBanque` VARCHAR(191) NULL,
    `entrepriseId` VARCHAR(191) NOT NULL,
    `estActif` BOOLEAN NOT NULL DEFAULT true,
    `creeLe` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `misAJourLe` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cycles_paie` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `dateDebut` DATETIME(3) NOT NULL,
    `dateFin` DATETIME(3) NOT NULL,
    `statut` ENUM('BROUILLON', 'APPROUVE', 'FERME') NOT NULL DEFAULT 'BROUILLON',
    `entrepriseId` VARCHAR(191) NOT NULL,
    `creeLe` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `misAJourLe` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bulletins_paie` (
    `id` VARCHAR(191) NOT NULL,
    `employeId` VARCHAR(191) NOT NULL,
    `cyclePaieId` VARCHAR(191) NOT NULL,
    `montantBrut` DOUBLE NOT NULL,
    `deductions` DOUBLE NOT NULL DEFAULT 0,
    `montantNet` DOUBLE NOT NULL,
    `joursTravailles` INTEGER NULL,
    `statut` ENUM('BROUILLON', 'APPROUVE', 'PAYE', 'PARTIEL', 'EN_ATTENTE') NOT NULL DEFAULT 'BROUILLON',
    `creeLe` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `misAJourLe` DATETIME(3) NOT NULL,

    UNIQUE INDEX `bulletins_paie_employeId_cyclePaieId_key`(`employeId`, `cyclePaieId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paiements` (
    `id` VARCHAR(191) NOT NULL,
    `bulletinPaieId` VARCHAR(191) NOT NULL,
    `montant` DOUBLE NOT NULL,
    `methode` ENUM('ESPECES', 'VIREMENT', 'MOBILE_MONEY') NOT NULL,
    `reference` VARCHAR(191) NULL,
    `notes` VARCHAR(191) NULL,
    `creeLe` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `misAJourLe` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `utilisateurs` ADD CONSTRAINT `utilisateurs_entrepriseId_fkey` FOREIGN KEY (`entrepriseId`) REFERENCES `entreprises`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employes` ADD CONSTRAINT `employes_entrepriseId_fkey` FOREIGN KEY (`entrepriseId`) REFERENCES `entreprises`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cycles_paie` ADD CONSTRAINT `cycles_paie_entrepriseId_fkey` FOREIGN KEY (`entrepriseId`) REFERENCES `entreprises`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bulletins_paie` ADD CONSTRAINT `bulletins_paie_employeId_fkey` FOREIGN KEY (`employeId`) REFERENCES `employes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bulletins_paie` ADD CONSTRAINT `bulletins_paie_cyclePaieId_fkey` FOREIGN KEY (`cyclePaieId`) REFERENCES `cycles_paie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paiements` ADD CONSTRAINT `paiements_bulletinPaieId_fkey` FOREIGN KEY (`bulletinPaieId`) REFERENCES `bulletins_paie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

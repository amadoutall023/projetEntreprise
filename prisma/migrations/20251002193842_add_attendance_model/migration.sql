-- CreateTable
CREATE TABLE `pointages` (
    `id` VARCHAR(191) NOT NULL,
    `employeId` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `heureArrivee` DATETIME(3) NULL,
    `heureDepart` DATETIME(3) NULL,
    `estPresent` BOOLEAN NOT NULL DEFAULT false,
    `heuresPrevues` DOUBLE NULL,
    `heuresTravaillees` DOUBLE NULL,
    `creeLe` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `misAJourLe` DATETIME(3) NOT NULL,

    INDEX `pointages_employeId_idx`(`employeId`),
    INDEX `pointages_date_idx`(`date`),
    UNIQUE INDEX `pointages_employeId_date_key`(`employeId`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pointages` ADD CONSTRAINT `pointages_employeId_fkey` FOREIGN KEY (`employeId`) REFERENCES `employes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

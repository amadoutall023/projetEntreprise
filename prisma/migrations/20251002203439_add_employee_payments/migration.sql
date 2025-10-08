-- AlterTable
ALTER TABLE `paiements` ADD COLUMN `employeId` VARCHAR(191) NULL,
    MODIFY `bulletinPaieId` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `paiements_employeId_idx` ON `paiements`(`employeId`);

-- AddForeignKey
ALTER TABLE `paiements` ADD CONSTRAINT `paiements_employeId_fkey` FOREIGN KEY (`employeId`) REFERENCES `employes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

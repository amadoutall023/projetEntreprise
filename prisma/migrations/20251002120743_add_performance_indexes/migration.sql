-- CreateIndex
CREATE INDEX `bulletins_paie_statut_idx` ON `bulletins_paie`(`statut`);

-- CreateIndex
CREATE INDEX `bulletins_paie_creeLe_idx` ON `bulletins_paie`(`creeLe`);

-- CreateIndex
CREATE INDEX `cycles_paie_statut_idx` ON `cycles_paie`(`statut`);

-- CreateIndex
CREATE INDEX `cycles_paie_dateDebut_idx` ON `cycles_paie`(`dateDebut`);

-- CreateIndex
CREATE INDEX `employes_estActif_idx` ON `employes`(`estActif`);

-- CreateIndex
CREATE INDEX `employes_creeLe_idx` ON `employes`(`creeLe`);

-- CreateIndex
CREATE INDEX `paiements_creeLe_idx` ON `paiements`(`creeLe`);

-- RenameIndex
ALTER TABLE `bulletins_paie` RENAME INDEX `bulletins_paie_cyclePaieId_fkey` TO `bulletins_paie_cyclePaieId_idx`;

-- RenameIndex
ALTER TABLE `cycles_paie` RENAME INDEX `cycles_paie_entrepriseId_fkey` TO `cycles_paie_entrepriseId_idx`;

-- RenameIndex
ALTER TABLE `employes` RENAME INDEX `employes_entrepriseId_fkey` TO `employes_entrepriseId_idx`;

-- RenameIndex
ALTER TABLE `paiements` RENAME INDEX `paiements_bulletinPaieId_fkey` TO `paiements_bulletinPaieId_idx`;

-- RenameIndex
ALTER TABLE `utilisateurs` RENAME INDEX `utilisateurs_entrepriseId_fkey` TO `utilisateurs_entrepriseId_idx`;

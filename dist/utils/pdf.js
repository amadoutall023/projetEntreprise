"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFService = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
class PDFService {
    generatePayslipPDF(payslip) {
        return new Promise((resolve, reject) => {
            try {
                const doc = new pdfkit_1.default();
                const buffers = [];
                doc.on('data', buffers.push.bind(buffers));
                doc.on('end', () => {
                    const pdfBuffer = Buffer.concat(buffers);
                    resolve(pdfBuffer);
                });
                // En-tête
                doc.fontSize(20).text('BULLETIN DE PAIE', { align: 'center' });
                doc.moveDown();
                // Informations entreprise
                doc.fontSize(12).text(`Entreprise: ${payslip.cyclePaie.entreprise.nom}`);
                doc.text(`Période: ${payslip.cyclePaie.dateDebut.toLocaleDateString()} - ${payslip.cyclePaie.dateFin.toLocaleDateString()}`);
                doc.moveDown();
                // Informations employé
                doc.text(`Employé: ${payslip.employe.prenom} ${payslip.employe.nom}`);
                doc.text(`Poste: ${payslip.employe.poste}`);
                doc.text(`Contrat: ${payslip.employe.typeContrat}`);
                doc.moveDown();
                // Détails salariaux
                doc.fontSize(14).text('DÉTAILS SALARIAUX', { underline: true });
                doc.fontSize(12);
                doc.text(`Salaire brut: ${payslip.montantBrut} ${payslip.cyclePaie.entreprise.devise}`);
                doc.text(`Déductions: ${payslip.deductions} ${payslip.cyclePaie.entreprise.devise}`);
                doc.text(`Net à payer: ${payslip.montantNet} ${payslip.cyclePaie.entreprise.devise}`);
                if (payslip.joursTravailles) {
                    doc.text(`Jours travaillés: ${payslip.joursTravailles}`);
                }
                doc.moveDown();
                // Paiements
                if (payslip.paiements.length > 0) {
                    doc.fontSize(14).text('PAIEMENTS EFFECTUÉS', { underline: true });
                    doc.fontSize(12);
                    payslip.paiements.forEach((payment) => {
                        doc.text(`${payment.methode}: ${payment.montant} ${payslip.cyclePaie.entreprise.devise} (${payment.creeLe.toLocaleDateString()})`);
                    });
                }
                // Pied de page
                doc.moveDown(2);
                doc.fontSize(10).text(`Généré le ${new Date().toLocaleDateString()}`, { align: 'center' });
                doc.end();
            }
            catch (error) {
                reject(error);
            }
        });
    }
    generatePaymentReceiptPDF(payment) {
        return new Promise((resolve, reject) => {
            try {
                const doc = new pdfkit_1.default();
                const buffers = [];
                doc.on('data', buffers.push.bind(buffers));
                doc.on('end', () => {
                    const pdfBuffer = Buffer.concat(buffers);
                    resolve(pdfBuffer);
                });
                // En-tête
                doc.fontSize(20).text('REÇU DE PAIEMENT', { align: 'center' });
                doc.moveDown();
                // Informations paiement
                doc.fontSize(12).text(`Référence: ${payment.reference || 'N/A'}`);
                doc.text(`Date: ${payment.creeLe.toLocaleDateString()}`);
                doc.text(`Montant: ${payment.montant} ${payment.bulletinPaie.cyclePaie.entreprise.devise}`);
                doc.text(`Mode: ${payment.methode}`);
                doc.moveDown();
                // Informations employé
                doc.text(`Employé: ${payment.bulletinPaie.employe.prenom} ${payment.bulletinPaie.employe.nom}`);
                doc.text(`Période: ${payment.bulletinPaie.cyclePaie.dateDebut.toLocaleDateString()} - ${payment.bulletinPaie.cyclePaie.dateFin.toLocaleDateString()}`);
                doc.moveDown();
                // Notes
                if (payment.notes) {
                    doc.text(`Notes: ${payment.notes}`);
                    doc.moveDown();
                }
                // Signature
                doc.moveDown(2);
                doc.text('___________________________', { align: 'right' });
                doc.text('Signature', { align: 'right' });
                doc.end();
            }
            catch (error) {
                reject(error);
            }
        });
    }
    generatePaymentListPDF(payments, companyName) {
        return new Promise((resolve, reject) => {
            try {
                const doc = new pdfkit_1.default();
                const buffers = [];
                doc.on('data', buffers.push.bind(buffers));
                doc.on('end', () => {
                    const pdfBuffer = Buffer.concat(buffers);
                    resolve(pdfBuffer);
                });
                // En-tête
                doc.fontSize(20).text('LISTE DES PAIEMENTS', { align: 'center' });
                doc.fontSize(12).text(`Entreprise: ${companyName}`, { align: 'center' });
                doc.text(`Généré le: ${new Date().toLocaleDateString()}`, { align: 'center' });
                doc.moveDown();
                // Tableau des paiements
                const tableTop = 150;
                const itemHeight = 20;
                // En-têtes
                doc.fontSize(10);
                doc.text('Employé', 50, tableTop);
                doc.text('Montant', 250, tableTop);
                doc.text('Mode', 350, tableTop);
                doc.text('Date', 450, tableTop);
                // Ligne de séparation
                doc.moveTo(50, tableTop + 15).lineTo(550, tableTop + 15).stroke();
                // Données
                let yPosition = tableTop + 25;
                payments.forEach((payment) => {
                    doc.text(`${payment.bulletinPaie.employe.prenom} ${payment.bulletinPaie.employe.nom}`, 50, yPosition);
                    doc.text(`${payment.montant}`, 250, yPosition);
                    doc.text(payment.methode, 350, yPosition);
                    doc.text(payment.creeLe.toLocaleDateString(), 450, yPosition);
                    yPosition += itemHeight;
                });
                // Total
                const total = payments.reduce((sum, payment) => sum + payment.montant, 0);
                doc.moveTo(50, yPosition + 10).lineTo(550, yPosition + 10).stroke();
                doc.fontSize(12).text(`Total: ${total}`, 250, yPosition + 20);
                doc.end();
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.PDFService = PDFService;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processUploadedLogo = exports.uploadLogo = void 0;
const multer_1 = __importDefault(require("multer"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
// Stockage en mémoire pour traitement
const memoryStorage = multer_1.default.memoryStorage();
// Fonction de traitement d'image
const processImage = async (buffer, filename) => {
    const outputPath = path_1.default.join('uploads/logos/', filename);
    await (0, sharp_1.default)(buffer)
        .resize(300, 300, {
        fit: 'inside',
        withoutEnlargement: true
    })
        .webp({ quality: 80 }) // Convertir en WebP avec qualité 80%
        .toFile(outputPath);
    return outputPath;
};
// Filtre pour accepter seulement les images
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    }
    else {
        cb(new Error('Seules les images sont autorisées'));
    }
};
// Middleware multer pour l'upload de logo
exports.uploadLogo = (0, multer_1.default)({
    storage: memoryStorage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB max
    }
});
// Fonction utilitaire pour traiter l'image après upload
const processUploadedLogo = async (file) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = `logo-${uniqueSuffix}.webp`;
    await processImage(file.buffer, filename);
    return filename;
};
exports.processUploadedLogo = processUploadedLogo;

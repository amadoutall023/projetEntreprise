import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import { Request } from 'express';

// Stockage en mémoire pour traitement
const memoryStorage = multer.memoryStorage();

// Fonction de traitement d'image
const processImage = async (buffer: Buffer, filename: string) => {
  const outputPath = path.join('uploads/logos/', filename);

  await sharp(buffer)
    .resize(300, 300, { // Redimensionner à 300x300 max
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({ quality: 80 }) // Convertir en WebP avec qualité 80%
    .toFile(outputPath);

  return outputPath;
};

// Filtre pour accepter seulement les images
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Seules les images sont autorisées'));
  }
};

// Middleware multer pour l'upload de logo
export const uploadLogo = multer({
  storage: memoryStorage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max
  }
});

// Fonction utilitaire pour traiter l'image après upload
export const processUploadedLogo = async (file: Express.Multer.File): Promise<string> => {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
  const filename = `logo-${uniqueSuffix}.webp`;

  await processImage(file.buffer, filename);
  return filename;
};
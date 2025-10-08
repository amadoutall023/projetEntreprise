import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', error);

  if (error.name === 'ValidationError') {
    res.status(400).json({
      message: 'Erreur de validation',
      errors: error.errors,
    });
    return;
  }

  if (error.name === 'UnauthorizedError') {
    res.status(401).json({ message: 'Non autorisé' });
    return;
  }

  res.status(500).json({
    message: 'Erreur interne du serveur',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  });
};

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({ message: 'Route non trouvée' });
};
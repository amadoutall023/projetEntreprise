import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../components/auth/service';
import { JWTPayload } from '../components/auth/types';

const authService = new AuthService();

export interface AuthRequest extends Request {
  user?: JWTPayload;
}

export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Token manquant' });
      return;
    }

    const token = authHeader.substring(7);
    const decoded = authService.verifyToken(token);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token invalide' });
  }
};
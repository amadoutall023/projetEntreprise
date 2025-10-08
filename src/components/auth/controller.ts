import { Request, Response } from 'express';
import { AuthService } from './service';
import { UserWithCompany } from '../../types';
import { AuthResponse } from './types';

const authService = new AuthService();

export class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await authService.authenticateUser(email, password);
      if (!user) {
        res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        return;
      }

      if (!user.estActif) {
        res.status(401).json({ message: 'Compte désactivé' });
        return;
      }

      // Récupérer les informations complètes de l'utilisateur avec l'entreprise
      const userData = await authService.findUserById(user.id);

      const token = authService.generateToken({
        userId: user.id,
        email: user.email,
        role: user.role,
        entrepriseId: user.entrepriseId || undefined,
      });

      const response: AuthResponse = {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.prenom,
          lastName: user.nom,
          role: user.role,
          companyId: user.entrepriseId || undefined,
          entrepriseNom: (userData as any)?.entreprise?.nom || null,
          companyName: (userData as any)?.entreprise?.nom || null,
          entrepriseLogo: (userData as any)?.entreprise?.logo || null,
        },
        token,
      };

      res.json(response);
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const userData = req.body;

      // Vérifier si l'email existe déjà
      const existingUser = await authService.findUserByEmail(userData.email);
      if (existingUser) {
        res.status(400).json({ message: 'Email déjà utilisé' });
        return;
      }

      const user = await authService.createUser(userData);

      const token = authService.generateToken({
        userId: user.id,
        email: user.email,
        role: user.role,
        entrepriseId: user.entrepriseId || undefined,
      });

      const response: AuthResponse = {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.prenom,
          lastName: user.nom,
          role: user.role,
          companyId: user.entrepriseId || undefined,
          entrepriseNom: (user as any).entreprise?.nom || null,
          companyName: (user as any).entreprise?.nom || null,
          entrepriseLogo: (user as any).entreprise?.logo || null,
        },
        token,
      };

      res.status(201).json(response);
    } catch (error) {
      console.error('Register error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async createUser(req: Request & { user?: any }, res: Response): Promise<void> {
    try {
      const userData = req.body;
      const currentUser = req.user;

      // Vérifier les permissions
      if (userData.role === 'SUPER_ADMINISTRATEUR' && currentUser?.role !== 'SUPER_ADMINISTRATEUR') {
        res.status(403).json({ message: 'Seul un super administrateur peut créer un super administrateur' });
        return;
      }

      if (userData.role === 'ADMINISTRATEUR' && currentUser?.role !== 'SUPER_ADMINISTRATEUR') {
        res.status(403).json({ message: 'Seul un super administrateur peut créer un administrateur' });
        return;
      }

      if (userData.role === 'CAISSIER') {
        if (currentUser?.role === 'SUPER_ADMINISTRATEUR') {
          // Super admin peut créer un caissier pour n'importe quelle entreprise
        } else if (currentUser?.role === 'ADMINISTRATEUR' && currentUser?.entrepriseId) {
          // Admin peut créer un caissier seulement pour son entreprise
          userData.companyId = currentUser.entrepriseId;
        } else {
          res.status(403).json({ message: 'Permissions insuffisantes pour créer un caissier' });
          return;
        }
      }

      // Vérifier si l'email existe déjà
      const existingUser = await authService.findUserByEmail(userData.email);
      if (existingUser) {
        res.status(400).json({ message: 'Email déjà utilisé' });
        return;
      }

      const user = await authService.createUser(userData);

      res.status(201).json({
        id: user.id,
        email: user.email,
        firstName: user.prenom,
        lastName: user.nom,
        role: user.role,
        companyId: user.entrepriseId,
      });
    } catch (error) {
      console.error('Create user error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }

  async getProfile(req: Request, res: Response): Promise<void> {
    try {
      const user = (req as any).user;
      if (!user || !user.userId) {
        res.status(401).json({ message: 'Non autorisé' });
        return;
      }

      const userData = await authService.findUserById(user.userId);
      if (!userData) {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
        return;
      }

      res.json({
        id: userData.id,
        email: userData.email,
        firstName: userData.prenom,
        lastName: userData.nom,
        role: userData.role,
        companyId: userData.entrepriseId,
        isActive: userData.estActif,
      });
    } catch (error) {
      console.error('Get profile error:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }
}
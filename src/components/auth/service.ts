import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../generated/prisma';
import { User, UserWithCompany } from '../../types';
import { JWTPayload } from './types';

const prisma = new PrismaClient();

export class AuthService {
  private jwtSecret = process.env.JWT_SECRET || 'default-secret';

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  generateToken(payload: JWTPayload): string {
    return jwt.sign(payload, this.jwtSecret, { expiresIn: '7d' });
  }

  verifyToken(token: string): JWTPayload {
    return jwt.verify(token, this.jwtSecret) as JWTPayload;
  }

  async createUser(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role?: 'SUPER_ADMINISTRATEUR' | 'ADMINISTRATEUR' | 'CAISSIER';
    companyId?: string;
  }): Promise<User> {
    const hashedPassword = await this.hashPassword(data.password);

    return prisma.utilisateur.create({
      data: {
        email: data.email,
        motDePasse: hashedPassword,
        prenom: data.firstName,
        nom: data.lastName,
        role: data.role || 'CAISSIER',
        entrepriseId: data.companyId,
      },
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return prisma.utilisateur.findUnique({
      where: { email },
      include: { entreprise: true },
    });
  }

  async findUserById(id: string): Promise<User | null> {
    return prisma.utilisateur.findUnique({
      where: { id },
      include: { entreprise: true },
    });
  }

  async authenticateUser(email: string, password: string): Promise<UserWithCompany | null> {
    const user = await this.findUserByEmail(email);
    if (!user) return null;

    const isValidPassword = await this.comparePassword(password, user.motDePasse);
    if (!isValidPassword) return null;

    return user;
  }
}
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class AuthService {
    constructor() {
        this.jwtSecret = process.env.JWT_SECRET || 'default-secret';
    }
    async hashPassword(password) {
        return bcrypt_1.default.hash(password, 12);
    }
    async comparePassword(password, hashedPassword) {
        return bcrypt_1.default.compare(password, hashedPassword);
    }
    generateToken(payload) {
        return jsonwebtoken_1.default.sign(payload, this.jwtSecret, { expiresIn: '7d' });
    }
    verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, this.jwtSecret);
    }
    async createUser(data) {
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
    async findUserByEmail(email) {
        return prisma.utilisateur.findUnique({
            where: { email },
            include: { entreprise: true },
        });
    }
    async findUserById(id) {
        return prisma.utilisateur.findUnique({
            where: { id },
            include: { entreprise: true },
        });
    }
    async authenticateUser(email, password) {
        const user = await this.findUserByEmail(email);
        if (!user)
            return null;
        const isValidPassword = await this.comparePassword(password, user.motDePasse);
        if (!isValidPassword)
            return null;
        return user;
    }
}
exports.AuthService = AuthService;

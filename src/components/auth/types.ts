export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: 'SUPER_ADMINISTRATEUR' | 'ADMINISTRATEUR' | 'CAISSIER';
  companyId?: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    companyId?: string;
    entrepriseNom?: string | null;
    companyName?: string | null;
    entrepriseLogo?: string | null;
  };
  token: string;
}

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  entrepriseId?: string;
}
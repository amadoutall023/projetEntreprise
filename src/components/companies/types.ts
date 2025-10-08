export interface CreateCompanyRequest {
  name: string;
  logo?: string;
  address?: string;
  currency?: string;
  payPeriodType?: 'MENSUEL' | 'HEBDOMADAIRE' | 'QUOTIDIEN';
  adminEmail: string;
  adminPassword: string;
}

export interface UpdateCompanyRequest {
  name?: string;
  logo?: string;
  address?: string;
  currency?: string;
  payPeriodType?: 'MENSUEL' | 'HEBDOMADAIRE' | 'QUOTIDIEN';
}
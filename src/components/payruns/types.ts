export interface CreatePayRunRequest {
  name: string;
  startDate: string;
  endDate: string;
  companyId: string;
}

export interface UpdatePayRunRequest {
  name?: string;
  startDate?: string;
  endDate?: string;
  status?: 'BROUILLON' | 'APPROUVE' | 'FERME';
}
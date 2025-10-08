export interface CreateEmployeeRequest {
  firstName: string;
  lastName: string;
  position: string;
  contractType: 'TEMPS_PLEIN' | 'TEMPS_PARTIEL' | 'CONTRAT';
  rate: number;
  bankAccount?: string;
  bankName?: string;
  companyId: string;
}

export interface UpdateEmployeeRequest {
  firstName?: string;
  lastName?: string;
  position?: string;
  contractType?: 'TEMPS_PLEIN' | 'TEMPS_PARTIEL' | 'CONTRAT';
  rate?: number;
  bankAccount?: string;
  bankName?: string;
  isActive?: boolean;
}

export interface EmployeeFilters {
  status?: 'active' | 'inactive';
  position?: string;
  contractType?: 'TEMPS_PLEIN' | 'TEMPS_PARTIEL' | 'CONTRAT';
  companyId?: string;
}
export interface CreatePaymentRequest {
  payslipId: string;
  amount: number;
  method: 'ESPECES' | 'VIREMENT' | 'MOBILE_MONEY';
  reference?: string;
  notes?: string;
}
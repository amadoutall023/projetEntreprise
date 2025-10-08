export interface PayslipData {
  employeeId: string;
  payRunId: string;
  grossAmount: number;
  deductions: number;
  netAmount: number;
  workedDays?: number;
}
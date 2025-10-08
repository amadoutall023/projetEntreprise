export interface AttendanceData {
  employeeId: string;
  date: string; // ISO date string
  startTime?: string; // ISO time string
  endTime?: string; // ISO time string
  isPresent: boolean;
  plannedHours?: number; // required for CONTRAT
}

export interface AttendanceReport {
  employeeName: string;
  contractType: string;
  hoursWorked: number;
  isPresent: boolean;
  timeBank?: number; // for TEMPS_PLEIN and TEMPS_PARTIEL
}
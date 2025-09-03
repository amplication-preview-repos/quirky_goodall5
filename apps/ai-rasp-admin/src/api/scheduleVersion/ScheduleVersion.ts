export type ScheduleVersion = {
  createdAt: Date;
  generatedBy: string | null;
  id: string;
  scoreMetrics: string | null;
  serializedSchedule: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};

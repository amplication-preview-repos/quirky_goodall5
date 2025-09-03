import { ScheduleVersion as TScheduleVersion } from "../api/scheduleVersion/ScheduleVersion";

export const SCHEDULEVERSION_TITLE_FIELD = "generatedBy";

export const ScheduleVersionTitle = (record: TScheduleVersion): string => {
  return record.generatedBy?.toString() || String(record.id);
};

import { SortOrder } from "../../util/SortOrder";

export type ScheduleVersionOrderByInput = {
  createdAt?: SortOrder;
  generatedBy?: SortOrder;
  id?: SortOrder;
  scoreMetrics?: SortOrder;
  serializedSchedule?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};

import { ScheduleVersionWhereInput } from "./ScheduleVersionWhereInput";
import { ScheduleVersionOrderByInput } from "./ScheduleVersionOrderByInput";

export type ScheduleVersionFindManyArgs = {
  where?: ScheduleVersionWhereInput;
  orderBy?: Array<ScheduleVersionOrderByInput>;
  skip?: number;
  take?: number;
};

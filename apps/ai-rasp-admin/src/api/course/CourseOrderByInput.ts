import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  code?: SortOrder;
  consecutiveHours?: SortOrder;
  createdAt?: SortOrder;
  hoursPerWeek?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  requiredRoomFeatures?: SortOrder;
  sessionsPerWeek?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};

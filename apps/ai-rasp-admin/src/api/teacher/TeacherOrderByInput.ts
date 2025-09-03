import { SortOrder } from "../../util/SortOrder";

export type TeacherOrderByInput = {
  createdAt?: SortOrder;
  departments?: SortOrder;
  id?: SortOrder;
  maxLoadHoursPerWeek?: SortOrder;
  name?: SortOrder;
  preferredSlots?: SortOrder;
  qualifications?: SortOrder;
  unavailableSlots?: SortOrder;
  updatedAt?: SortOrder;
};

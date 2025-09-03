import { SortOrder } from "../../util/SortOrder";

export type GroupOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  faculty?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  preferredSlots?: SortOrder;
  specialization?: SortOrder;
  studentCount?: SortOrder;
  studyYear?: SortOrder;
  updatedAt?: SortOrder;
};

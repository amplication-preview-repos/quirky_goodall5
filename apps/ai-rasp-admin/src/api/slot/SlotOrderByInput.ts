import { SortOrder } from "../../util/SortOrder";

export type SlotOrderByInput = {
  createdAt?: SortOrder;
  dayOfWeek?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  slotIndex?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};

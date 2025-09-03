import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  features?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  unavailableSlots?: SortOrder;
  updatedAt?: SortOrder;
};

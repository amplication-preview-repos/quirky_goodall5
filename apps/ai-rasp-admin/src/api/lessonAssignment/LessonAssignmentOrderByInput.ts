import { SortOrder } from "../../util/SortOrder";

export type LessonAssignmentOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  durationSlots?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  slotId?: SortOrder;
  teacherId?: SortOrder;
  updatedAt?: SortOrder;
};

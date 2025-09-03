import { LessonAssignmentUpdateManyWithoutRoomsInput } from "./LessonAssignmentUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  capacity?: number | null;
  features?: string | null;
  lessonAssignments?: LessonAssignmentUpdateManyWithoutRoomsInput;
  location?: string | null;
  name?: string | null;
  unavailableSlots?: string | null;
};

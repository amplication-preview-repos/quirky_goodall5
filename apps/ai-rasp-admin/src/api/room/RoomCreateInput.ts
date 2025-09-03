import { LessonAssignmentCreateNestedManyWithoutRoomsInput } from "./LessonAssignmentCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  capacity?: number | null;
  features?: string | null;
  lessonAssignments?: LessonAssignmentCreateNestedManyWithoutRoomsInput;
  location?: string | null;
  name?: string | null;
  unavailableSlots?: string | null;
};

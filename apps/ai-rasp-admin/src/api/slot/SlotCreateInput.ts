import { LessonAssignmentCreateNestedManyWithoutSlotsInput } from "./LessonAssignmentCreateNestedManyWithoutSlotsInput";

export type SlotCreateInput = {
  dayOfWeek?: number | null;
  endTime?: string | null;
  lessonAssignments?: LessonAssignmentCreateNestedManyWithoutSlotsInput;
  slotIndex?: number | null;
  startTime?: string | null;
};

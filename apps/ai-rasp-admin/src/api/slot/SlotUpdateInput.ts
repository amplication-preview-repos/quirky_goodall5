import { LessonAssignmentUpdateManyWithoutSlotsInput } from "./LessonAssignmentUpdateManyWithoutSlotsInput";

export type SlotUpdateInput = {
  dayOfWeek?: number | null;
  endTime?: string | null;
  lessonAssignments?: LessonAssignmentUpdateManyWithoutSlotsInput;
  slotIndex?: number | null;
  startTime?: string | null;
};

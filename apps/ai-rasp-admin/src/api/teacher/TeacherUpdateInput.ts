import { LessonAssignmentUpdateManyWithoutTeachersInput } from "./LessonAssignmentUpdateManyWithoutTeachersInput";

export type TeacherUpdateInput = {
  departments?: string | null;
  lessonAssignments?: LessonAssignmentUpdateManyWithoutTeachersInput;
  maxLoadHoursPerWeek?: number | null;
  name?: string | null;
  preferredSlots?: string | null;
  qualifications?: string | null;
  unavailableSlots?: string | null;
};

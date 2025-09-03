import { LessonAssignmentCreateNestedManyWithoutTeachersInput } from "./LessonAssignmentCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  departments?: string | null;
  lessonAssignments?: LessonAssignmentCreateNestedManyWithoutTeachersInput;
  maxLoadHoursPerWeek?: number | null;
  name?: string | null;
  preferredSlots?: string | null;
  qualifications?: string | null;
  unavailableSlots?: string | null;
};

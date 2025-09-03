import { LessonAssignmentCreateNestedManyWithoutGroupsInput } from "./LessonAssignmentCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  code?: string | null;
  faculty?: string | null;
  lessonAssignments?: LessonAssignmentCreateNestedManyWithoutGroupsInput;
  name?: string | null;
  preferredSlots?: string | null;
  specialization?: string | null;
  studentCount?: number | null;
  studyYear?: number | null;
};

import { LessonAssignmentUpdateManyWithoutGroupsInput } from "./LessonAssignmentUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  code?: string | null;
  faculty?: string | null;
  lessonAssignments?: LessonAssignmentUpdateManyWithoutGroupsInput;
  name?: string | null;
  preferredSlots?: string | null;
  specialization?: string | null;
  studentCount?: number | null;
  studyYear?: number | null;
};

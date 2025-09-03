import { LessonAssignmentCreateNestedManyWithoutCoursesInput } from "./LessonAssignmentCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  code?: string | null;
  consecutiveHours?: boolean | null;
  hoursPerWeek?: number | null;
  lessonAssignments?: LessonAssignmentCreateNestedManyWithoutCoursesInput;
  name?: string | null;
  requiredRoomFeatures?: string | null;
  sessionsPerWeek?: number | null;
  typeField?: string | null;
};

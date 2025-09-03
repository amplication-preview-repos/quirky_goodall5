import { LessonAssignmentUpdateManyWithoutCoursesInput } from "./LessonAssignmentUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  code?: string | null;
  consecutiveHours?: boolean | null;
  hoursPerWeek?: number | null;
  lessonAssignments?: LessonAssignmentUpdateManyWithoutCoursesInput;
  name?: string | null;
  requiredRoomFeatures?: string | null;
  sessionsPerWeek?: number | null;
  typeField?: string | null;
};

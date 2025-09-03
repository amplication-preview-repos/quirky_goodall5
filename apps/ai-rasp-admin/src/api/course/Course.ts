import { LessonAssignment } from "../lessonAssignment/LessonAssignment";

export type Course = {
  code: string | null;
  consecutiveHours: boolean | null;
  createdAt: Date;
  hoursPerWeek: number | null;
  id: string;
  lessonAssignments?: Array<LessonAssignment>;
  name: string | null;
  requiredRoomFeatures: string | null;
  sessionsPerWeek: number | null;
  typeField: string | null;
  updatedAt: Date;
};

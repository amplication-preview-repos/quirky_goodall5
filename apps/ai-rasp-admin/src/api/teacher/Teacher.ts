import { LessonAssignment } from "../lessonAssignment/LessonAssignment";

export type Teacher = {
  createdAt: Date;
  departments: string | null;
  id: string;
  lessonAssignments?: Array<LessonAssignment>;
  maxLoadHoursPerWeek: number | null;
  name: string | null;
  preferredSlots: string | null;
  qualifications: string | null;
  unavailableSlots: string | null;
  updatedAt: Date;
};

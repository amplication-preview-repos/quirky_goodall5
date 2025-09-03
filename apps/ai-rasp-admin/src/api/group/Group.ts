import { LessonAssignment } from "../lessonAssignment/LessonAssignment";

export type Group = {
  code: string | null;
  createdAt: Date;
  faculty: string | null;
  id: string;
  lessonAssignments?: Array<LessonAssignment>;
  name: string | null;
  preferredSlots: string | null;
  specialization: string | null;
  studentCount: number | null;
  studyYear: number | null;
  updatedAt: Date;
};

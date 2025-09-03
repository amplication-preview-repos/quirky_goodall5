import { LessonAssignment } from "../lessonAssignment/LessonAssignment";

export type Slot = {
  createdAt: Date;
  dayOfWeek: number | null;
  endTime: string | null;
  id: string;
  lessonAssignments?: Array<LessonAssignment>;
  slotIndex: number | null;
  startTime: string | null;
  updatedAt: Date;
};

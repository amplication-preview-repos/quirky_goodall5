import { LessonAssignment } from "../lessonAssignment/LessonAssignment";

export type Room = {
  capacity: number | null;
  createdAt: Date;
  features: string | null;
  id: string;
  lessonAssignments?: Array<LessonAssignment>;
  location: string | null;
  name: string | null;
  unavailableSlots: string | null;
  updatedAt: Date;
};

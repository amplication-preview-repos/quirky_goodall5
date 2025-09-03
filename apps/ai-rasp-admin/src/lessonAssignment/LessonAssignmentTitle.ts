import { LessonAssignment as TLessonAssignment } from "../api/lessonAssignment/LessonAssignment";

export const LESSONASSIGNMENT_TITLE_FIELD = "id";

export const LessonAssignmentTitle = (record: TLessonAssignment): string => {
  return record.id?.toString() || String(record.id);
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonAssignmentListRelationFilter } from "../lessonAssignment/LessonAssignmentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type GroupWhereInput = {
  code?: StringNullableFilter;
  faculty?: StringNullableFilter;
  id?: StringFilter;
  lessonAssignments?: LessonAssignmentListRelationFilter;
  name?: StringNullableFilter;
  preferredSlots?: StringNullableFilter;
  specialization?: StringNullableFilter;
  studentCount?: IntNullableFilter;
  studyYear?: IntNullableFilter;
};

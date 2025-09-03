import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonAssignmentListRelationFilter } from "../lessonAssignment/LessonAssignmentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TeacherWhereInput = {
  departments?: StringNullableFilter;
  id?: StringFilter;
  lessonAssignments?: LessonAssignmentListRelationFilter;
  maxLoadHoursPerWeek?: IntNullableFilter;
  name?: StringNullableFilter;
  preferredSlots?: StringNullableFilter;
  qualifications?: StringNullableFilter;
  unavailableSlots?: StringNullableFilter;
};

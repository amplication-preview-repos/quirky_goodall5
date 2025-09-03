import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonAssignmentListRelationFilter } from "../lessonAssignment/LessonAssignmentListRelationFilter";

export type SlotWhereInput = {
  dayOfWeek?: IntNullableFilter;
  endTime?: StringNullableFilter;
  id?: StringFilter;
  lessonAssignments?: LessonAssignmentListRelationFilter;
  slotIndex?: IntNullableFilter;
  startTime?: StringNullableFilter;
};

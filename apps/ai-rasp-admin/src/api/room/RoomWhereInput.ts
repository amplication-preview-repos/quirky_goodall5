import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonAssignmentListRelationFilter } from "../lessonAssignment/LessonAssignmentListRelationFilter";

export type RoomWhereInput = {
  capacity?: IntNullableFilter;
  features?: StringNullableFilter;
  id?: StringFilter;
  lessonAssignments?: LessonAssignmentListRelationFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  unavailableSlots?: StringNullableFilter;
};

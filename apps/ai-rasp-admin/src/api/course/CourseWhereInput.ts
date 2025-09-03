import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonAssignmentListRelationFilter } from "../lessonAssignment/LessonAssignmentListRelationFilter";

export type CourseWhereInput = {
  code?: StringNullableFilter;
  consecutiveHours?: BooleanNullableFilter;
  hoursPerWeek?: IntNullableFilter;
  id?: StringFilter;
  lessonAssignments?: LessonAssignmentListRelationFilter;
  name?: StringNullableFilter;
  requiredRoomFeatures?: StringNullableFilter;
  sessionsPerWeek?: IntNullableFilter;
  typeField?: StringNullableFilter;
};

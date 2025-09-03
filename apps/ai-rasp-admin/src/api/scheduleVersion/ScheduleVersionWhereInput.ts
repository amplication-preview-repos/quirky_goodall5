import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ScheduleVersionWhereInput = {
  generatedBy?: StringNullableFilter;
  id?: StringFilter;
  scoreMetrics?: StringNullableFilter;
  serializedSchedule?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};

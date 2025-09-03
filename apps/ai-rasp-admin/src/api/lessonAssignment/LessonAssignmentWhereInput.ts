import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { SlotWhereUniqueInput } from "../slot/SlotWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type LessonAssignmentWhereInput = {
  course?: CourseWhereUniqueInput;
  durationSlots?: IntNullableFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  slot?: SlotWhereUniqueInput;
  teacher?: TeacherWhereUniqueInput;
};

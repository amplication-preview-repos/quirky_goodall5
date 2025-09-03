import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { SlotWhereUniqueInput } from "../slot/SlotWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type LessonAssignmentUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  durationSlots?: number | null;
  group?: GroupWhereUniqueInput | null;
  room?: RoomWhereUniqueInput | null;
  slot?: SlotWhereUniqueInput | null;
  teacher?: TeacherWhereUniqueInput | null;
};

import { Course } from "../course/Course";
import { Group } from "../group/Group";
import { Room } from "../room/Room";
import { Slot } from "../slot/Slot";
import { Teacher } from "../teacher/Teacher";

export type LessonAssignment = {
  course?: Course | null;
  createdAt: Date;
  durationSlots: number | null;
  group?: Group | null;
  id: string;
  room?: Room | null;
  slot?: Slot | null;
  teacher?: Teacher | null;
  updatedAt: Date;
};

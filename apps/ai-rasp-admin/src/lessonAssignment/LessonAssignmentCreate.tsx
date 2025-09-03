import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CourseTitle } from "../course/CourseTitle";
import { GroupTitle } from "../group/GroupTitle";
import { RoomTitle } from "../room/RoomTitle";
import { SlotTitle } from "../slot/SlotTitle";
import { TeacherTitle } from "../teacher/TeacherTitle";

export const LessonAssignmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="duration_slots" source="durationSlots" />
        <ReferenceInput source="group.id" reference="Group" label="Group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <ReferenceInput source="room.id" reference="Room" label="Room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
        <ReferenceInput source="slot.id" reference="Slot" label="Slot">
          <SelectInput optionText={SlotTitle} />
        </ReferenceInput>
        <ReferenceInput source="teacher.id" reference="Teacher" label="Teacher">
          <SelectInput optionText={TeacherTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";
import { SLOT_TITLE_FIELD } from "../slot/SlotTitle";
import { TEACHER_TITLE_FIELD } from "./TeacherTitle";

export const TeacherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="departments" source="departments" />
        <TextField label="ID" source="id" />
        <TextField
          label="max_load_hours_per_week"
          source="maxLoadHoursPerWeek"
        />
        <TextField label="name" source="name" />
        <TextField label="preferred_slots" source="preferredSlots" />
        <TextField label="qualifications" source="qualifications" />
        <TextField label="unavailable_slots" source="unavailableSlots" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LessonAssignment"
          target="teacherId"
          label="LessonAssignments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="duration_slots" source="durationSlots" />
            <ReferenceField label="Group" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Room" source="room.id" reference="Room">
              <TextField source={ROOM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Slot" source="slot.id" reference="Slot">
              <TextField source={SLOT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Teacher"
              source="teacher.id"
              reference="Teacher"
            >
              <TextField source={TEACHER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

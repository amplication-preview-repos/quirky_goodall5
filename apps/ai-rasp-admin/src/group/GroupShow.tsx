import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { GROUP_TITLE_FIELD } from "./GroupTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";
import { SLOT_TITLE_FIELD } from "../slot/SlotTitle";
import { TEACHER_TITLE_FIELD } from "../teacher/TeacherTitle";

export const GroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="faculty" source="faculty" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="preferred_slots" source="preferredSlots" />
        <TextField label="specialization" source="specialization" />
        <TextField label="student_count" source="studentCount" />
        <TextField label="study_year" source="studyYear" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LessonAssignment"
          target="groupId"
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

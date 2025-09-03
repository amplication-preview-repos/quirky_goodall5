import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LessonAssignmentTitle } from "../lessonAssignment/LessonAssignmentTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <BooleanInput label="consecutive_hours" source="consecutiveHours" />
        <NumberInput step={1} label="hours_per_week" source="hoursPerWeek" />
        <ReferenceArrayInput
          source="lessonAssignments"
          reference="LessonAssignment"
        >
          <SelectArrayInput
            optionText={LessonAssignmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput
          label="required_room_features"
          multiline
          source="requiredRoomFeatures"
        />
        <NumberInput
          step={1}
          label="sessions_per_week"
          source="sessionsPerWeek"
        />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};

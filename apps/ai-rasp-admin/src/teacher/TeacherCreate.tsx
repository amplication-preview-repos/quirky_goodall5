import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { LessonAssignmentTitle } from "../lessonAssignment/LessonAssignmentTitle";

export const TeacherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="departments" multiline source="departments" />
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
        <NumberInput
          step={1}
          label="max_load_hours_per_week"
          source="maxLoadHoursPerWeek"
        />
        <TextInput label="name" source="name" />
        <TextInput label="preferred_slots" multiline source="preferredSlots" />
        <TextInput label="qualifications" multiline source="qualifications" />
        <TextInput
          label="unavailable_slots"
          multiline
          source="unavailableSlots"
        />
      </SimpleForm>
    </Create>
  );
};

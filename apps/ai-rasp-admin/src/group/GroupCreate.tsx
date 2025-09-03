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

export const GroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="faculty" source="faculty" />
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
        <TextInput label="preferred_slots" multiline source="preferredSlots" />
        <TextInput label="specialization" source="specialization" />
        <NumberInput step={1} label="student_count" source="studentCount" />
        <NumberInput step={1} label="study_year" source="studyYear" />
      </SimpleForm>
    </Create>
  );
};

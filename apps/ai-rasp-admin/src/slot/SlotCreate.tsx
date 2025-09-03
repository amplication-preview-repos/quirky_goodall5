import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LessonAssignmentTitle } from "../lessonAssignment/LessonAssignmentTitle";

export const SlotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="day_of_week" source="dayOfWeek" />
        <TextInput label="end_time" source="endTime" />
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
        <NumberInput step={1} label="slot_index" source="slotIndex" />
        <TextInput label="start_time" source="startTime" />
      </SimpleForm>
    </Create>
  );
};

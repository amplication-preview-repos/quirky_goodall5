import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ScheduleVersionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="generated_by" source="generatedBy" />
        <TextInput label="score_metrics" multiline source="scoreMetrics" />
        <TextInput
          label="serialized_schedule"
          multiline
          source="serializedSchedule"
        />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};

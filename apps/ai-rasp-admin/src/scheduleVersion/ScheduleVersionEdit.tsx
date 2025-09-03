import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ScheduleVersionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ScheduleVersionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ScheduleVersions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="generated_by" source="generatedBy" />
        <TextField label="ID" source="id" />
        <TextField label="score_metrics" source="scoreMetrics" />
        <TextField label="serialized_schedule" source="serializedSchedule" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

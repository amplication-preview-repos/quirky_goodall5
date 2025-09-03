import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GroupList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Groups"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="faculty" source="faculty" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="preferred_slots" source="preferredSlots" />
        <TextField label="specialization" source="specialization" />
        <TextField label="student_count" source="studentCount" />
        <TextField label="study_year" source="studyYear" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

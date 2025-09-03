import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeacherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Teachers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

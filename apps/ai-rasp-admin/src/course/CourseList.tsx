import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CourseList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Courses"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="code" source="code" />
        <BooleanField label="consecutive_hours" source="consecutiveHours" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="hours_per_week" source="hoursPerWeek" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField
          label="required_room_features"
          source="requiredRoomFeatures"
        />
        <TextField label="sessions_per_week" source="sessionsPerWeek" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

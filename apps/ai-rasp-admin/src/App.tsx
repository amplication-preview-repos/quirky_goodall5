import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { TeacherList } from "./teacher/TeacherList";
import { TeacherCreate } from "./teacher/TeacherCreate";
import { TeacherEdit } from "./teacher/TeacherEdit";
import { TeacherShow } from "./teacher/TeacherShow";
import { ConstraintList } from "./constraint/ConstraintList";
import { ConstraintCreate } from "./constraint/ConstraintCreate";
import { ConstraintEdit } from "./constraint/ConstraintEdit";
import { ConstraintShow } from "./constraint/ConstraintShow";
import { ScheduleVersionList } from "./scheduleVersion/ScheduleVersionList";
import { ScheduleVersionCreate } from "./scheduleVersion/ScheduleVersionCreate";
import { ScheduleVersionEdit } from "./scheduleVersion/ScheduleVersionEdit";
import { ScheduleVersionShow } from "./scheduleVersion/ScheduleVersionShow";
import { LessonAssignmentList } from "./lessonAssignment/LessonAssignmentList";
import { LessonAssignmentCreate } from "./lessonAssignment/LessonAssignmentCreate";
import { LessonAssignmentEdit } from "./lessonAssignment/LessonAssignmentEdit";
import { LessonAssignmentShow } from "./lessonAssignment/LessonAssignmentShow";
import { SlotList } from "./slot/SlotList";
import { SlotCreate } from "./slot/SlotCreate";
import { SlotEdit } from "./slot/SlotEdit";
import { SlotShow } from "./slot/SlotShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"AI-Rasp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="Teacher"
          list={TeacherList}
          edit={TeacherEdit}
          create={TeacherCreate}
          show={TeacherShow}
        />
        <Resource
          name="Constraint"
          list={ConstraintList}
          edit={ConstraintEdit}
          create={ConstraintCreate}
          show={ConstraintShow}
        />
        <Resource
          name="ScheduleVersion"
          list={ScheduleVersionList}
          edit={ScheduleVersionEdit}
          create={ScheduleVersionCreate}
          show={ScheduleVersionShow}
        />
        <Resource
          name="LessonAssignment"
          list={LessonAssignmentList}
          edit={LessonAssignmentEdit}
          create={LessonAssignmentCreate}
          show={LessonAssignmentShow}
        />
        <Resource
          name="Slot"
          list={SlotList}
          edit={SlotEdit}
          create={SlotCreate}
          show={SlotShow}
        />
      </Admin>
    </div>
  );
};

export default App;

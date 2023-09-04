import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "./MainComponents/Header";
import { Button, Col, Modal, Row } from "react-bootstrap";
import {
  GroupTable,
  ProjectTable,
  StudentGroupsTable,
  TaskTable,
} from "./MainComponents/InnerScreen";
import "./main.css";
import ModalWindow from "./MainComponents/ModalWindow";
import { useSelector } from "react-redux";
const RELATED_ID = 1;
function MainDashbord() {
  let { prams } = useParams();
  const [show, setShow] = useState(false);
  const nav = useNavigate();
  const user = useSelector((state) => state.user);
  const studentstate = useSelector((state) => state.studentState);
  const groupState = useSelector((state) => state.groupState);
  const projectState = useSelector((state) => state.projectsState);
  const taskState = useSelector((state) => state.tasksState);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const redirectUSer = () => {
    setTimeout(() => {
      nav("/");
    }, 2000);
  };
  useEffect(() => {}, [studentstate.length]);

  console.log(studentstate.length);
  return user === null ? (
    redirectUSer()
  ) : (
    <Col>
      <Header
        btntext={prams ? "Add " + prams[0].toUpperCase() + prams.slice(1) : ""}
        addFunction={handleShow}
      />
      <h1>{prams}</h1>
      <Row>
        <Col>
          {prams === "student" ? (
            <StudentGroupsTable
              student={studentstate.length > 0 ? studentstate : data.students}
            />
          ) : prams === "Tasks" ? (
            <TaskTable taskState={taskState} tasks={taskState.length > 0 ? taskState : data.tasks} />
          ) : prams === "Groups" ? (
            <GroupTable
              groups={groupState.length > 0 ? groupState : data.groups}
            />
          ) : prams === "Projects" ? (
            <ProjectTable
              projectState={projectState}
              projects={projectState.length > 0 ? projectState : data.projects}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
      <ModalWindow
        show={show}
        handleClose={() => handleClose()}
        title={prams}
        prams={prams}
      />
    </Col>
  );
}

export default MainDashbord;
const data = {
  groups: [
    {
      groupId: "group1",
      gName: "Group A",
      students: ["student1", "student2"],
    },
    {
      groupId: "group2",
      gName: "Group B",
      students: ["student3", "student4"],
    },
  ],
  students: [
    {
      studentId: "student1",
      sName: "Alice",
    },
    {
      studentId: "student2",
      sName: "Bob",
    },
    {
      studentId: "student3",
      sName: "Charlie",
    },
    {
      studentId: "student4",
      sName: "David",
    },
  ],
  tasks: [
    {
      taskId: "task1",
      groupId: "group1",
      weekNo: 1,
      type: "Homework",
      startTime: "09:00 AM",
      endTime: "10:30 AM",
      description: "Complete chapter 2 exercises",
      attachments: ["attachment1.pdf"],
    },
    {
      id: "task2",
      groupId: "group2",
      weekNo: 2,
      type: "Project",
      startTime: "02:00 PM",
      endTime: "04:00 PM",
      description: "Prepare presentation on topic X",
      attachments: ["attachment2.pptx"],
    },
  ],
  projects: [
    {
      projectId: "project1",
      groupId: "group1",
      weekNo: 3,
      type: "Group Project",
      startTime: "10:00 AM",
      endTime: "01:00 PM",
      description: "Collaborative coding project",
      attachments: ["project_specs.pdf"],
    },
  ],
};

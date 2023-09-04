import React from "react";
import { Button, Modal } from "react-bootstrap";
import AddStudentData from "./AddStudentData";
import AddGroupData from "./AddGroupData";
import AddProjectData from "./AddProjectData";
import AddTaskData from "./AddTaskData";

function ModalWindow(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{"Add " + props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.prams === "student" ? (
          <AddStudentData handleClose={props.handleClose} />
        ) : props.prams === "Groups" ? (
          <AddGroupData handleClose={props.handleClose} />
        ) : props.prams === "Projects" ? (
          <AddProjectData handleClose={props.handleClose} />
        ) : (
          <AddTaskData handleClose={props.handleClose} />
        )}{" "}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalWindow;

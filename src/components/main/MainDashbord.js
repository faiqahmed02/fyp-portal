import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './MainComponents/Header';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { GroupTable, ProjectTable, StudentGroupsTable, TaskTable } from './MainComponents/InnerScreen';
import './main.css'
import ModalWindow from './MainComponents/ModalWindow';
import { useSelector } from 'react-redux';
const RELATED_ID = 1;
function MainDashbord() {
    let { prams } = useParams();
    const [show, setShow] = useState(false);
    const nav = useNavigate();
    const user = useSelector((state) => state.user)
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    const redirectUSer = () => {
        setTimeout(() => {
            nav('/')
        }, 2000);
    }

    return (
        user === null ? redirectUSer() :
            <Col>
                <Header btntext="Add Student" addFunction={handleShow} />
                <h1>{prams}</h1>
                <Row>
                    <Col>
                        {prams === "student" ?
                            <StudentGroupsTable student={data.students} />
                            : prams === "Tasks" ?
                                <TaskTable tasks={data.tasks} /> : prams === "Groups" ?
                                    <GroupTable groups={data.groups} /> : prams === "Projects" ? <ProjectTable projects={data.projects} /> : ""
                        }
                    </Col>
                </Row>
                <ModalWindow show={show} handleClose={handleClose} title={prams} />
            </Col>
    )
}

export default MainDashbord
const data =
{
    "groups": [
        {
            "id": "group1",
            "name": "Group A",
            "students": ["student1", "student2"]
        },
        {
            "id": "group2",
            "name": "Group B",
            "students": ["student3", "student4"]
        }
    ],
    "students": [
        {
            "id": "student1",
            "name": "Alice"
        },
        {
            "id": "student2",
            "name": "Bob"
        },
        {
            "id": "student3",
            "name": "Charlie"
        },
        {
            "id": "student4",
            "name": "David"
        }
    ],
    "tasks": [
        {
            "id": "task1",
            "groupId": "group1",
            "weekNo": 1,
            "type": "Homework",
            "startTime": "09:00 AM",
            "endTime": "10:30 AM",
            "description": "Complete chapter 2 exercises",
            "attachments": ["attachment1.pdf"]
        },
        {
            "id": "task2",
            "groupId": "group2",
            "weekNo": 2,
            "type": "Project",
            "startTime": "02:00 PM",
            "endTime": "04:00 PM",
            "description": "Prepare presentation on topic X",
            "attachments": ["attachment2.pptx"]
        }
    ],
    "projects": [
        {
            "id": "project1",
            "groupId": "group1",
            "weekNo": 3,
            "type": "Group Project",
            "startTime": "10:00 AM",
            "endTime": "01:00 PM",
            "description": "Collaborative coding project",
            "attachments": ["project_specs.pdf"]
        }
    ]
}
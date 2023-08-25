// import React from 'react'
// import { Link, useLocation, useParams } from 'react-router-dom';
// import Header from './Header';
// import { Col, Row } from 'react-bootstrap';
// import { StudentGroupsTable } from './InnerScreen';
// const RELATED_ID = 1;
// function Student() {
//     let { prams } = useParams();
//     return (
//         <Col>
//             <Header />
//             <Row>
//                 <Col>
//                     <StudentGroupsTable studentGroups={data.studentGroups}  />
//                 </Col>
//             </Row>
//         </Col>
//     )
// }

// export default Student
// const data =
// {
//     "studentGroups": [
//         {
//             "id": 1,
//             "name": "Group A",
//             "members": ["Alice", "Bob"],
//             "tasks": [1, 2]
//         },
//         {
//             "id": 2,
//             "name": "Group B",
//             "members": ["Charlie", "David"],
//             "tasks": [3, 4]
//         }
//     ],
//     "tasks": [
//         {
//             "id": 1,
//             "title": "Task 1",
//             "description": "Complete assignment 1",
//             "projectId": 1
//         },
//         {
//             "id": 2,
//             "title": "Task 2",
//             "description": "Research topic for presentation",
//             "projectId": 1
//         },
//         {
//             "id": 3,
//             "title": "Task 3",
//             "description": "Prepare project proposal",
//             "projectId": 2
//         },
//         {
//             "id": 4,
//             "title": "Task 4",
//             "description": "Create project presentation",
//             "projectId": 2
//         }
//     ],
//     "projects": [
//         {
//             "id": 1,
//             "title": "Project A",
//             "description": "Develop a web application",
//             "groupId": 1
//         },
//         {
//             "id": 2,
//             "title": "Project B",
//             "description": "Research and presentation on AI",
//             "groupId": 2
//         }
//     ]
// }
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import TextsFieldsInput from '../../Inputs/TextsFieldsInput'
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { StudentRed } from '../../../Store/rootSlice';

function AddStudentData(props) {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8)
    const studentState = useSelector((state) => state.studentState);
    const dispatch = useDispatch();
    console.log(small_id);
    const [students, setStudents] = useState([]);
    const [studentData, setStudentData] = useState({
        studentId: small_id,
        sName: '',
        sEmail: '',
    });
    const [subClicked, setSubClicked] = useState(false)



    const handleInputChange = event => {
        const { name, value } = event.target;
        setStudentData({
            ...studentData,
            [name]: value,
        });
        console.log(studentData);
    };
    // console.log(studentState);
    const handleAddStudent = (e) => {
        e.preventDefault()
        if (studentData.sName && studentData.sEmail) {
            setStudents([
                ...studentState,
                studentData]
            );

            setSubClicked(true)
        } else {
            alert("What are you doing add data first")
        }

    };
    useEffect(() => {
        if (subClicked) {
            dispatch(StudentRed(students));
            setStudentData({ studentId: small_id, sName: '', sEmail: '' });
            console.log(students);
        }


    }, [students])

    return (
        <Form onSubmit={handleAddStudent}>
            <TextsFieldsInput
                name="sName"
                onTextChange={handleInputChange}
                placeholder="Student Name"
                type="text"
                ControlId="studentId"
                label="Student Name"
            />
            <TextsFieldsInput
                name="sEmail"
                onTextChange={handleInputChange}
                placeholder="Student Email"
                type="email"
                ControlId="studentId"
                label="Student Email"
            />
            <Button type='submit' onClick={props.handleClose} style={{marginTop: 10}} >Add Student</Button>
        </Form>
    )
}

export default AddStudentData
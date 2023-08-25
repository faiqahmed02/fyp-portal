import React, { useState } from 'react'
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
    const [studentData, setStudentData] = useState(studentState.length ? studentState : {
        studentId: small_id,
        sName: '',
        sEmail: '',
    });



    const handleInputChange = event => {
        const { name, value } = event.target;
        setStudentData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    console.log(studentState);
    const handleAddStudent = (e) => {
        e.preventDefault()
        setStudents(prevStudents => [...prevStudents, studentData]);
        console.log(students);
        dispatch(StudentRed(students))
        setStudentData({ studentId: small_id, sName: '', sEmail: '' });
    };
    return (
        <Form>
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
            <Button type='submit' onClick={handleAddStudent} >Add Student</Button>
        </Form>
    )
}

export default AddStudentData
import React, { useEffect, useId, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import TextsFieldsInput from '../Inputs/TextsFieldsInput'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../../Store/rootSlice'
import { v4 as uuid } from 'uuid';
import axios from 'axios'
let baseURL = 'http://localhost:3001/api/users'
function SignUp(props) {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8)
    console.log(small_id);
    // states
    const [formData, setFormData] = useState({
        uid: small_id,
        fullname: "",
        email: "",
        passward: "",
        re_pass: "",
        admin: false,
    })
    const [users, setUsers] = useState([]);

    // Navigation
    const navRout = useNavigate()

    // Redux Function
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
        console.log(formData);
    }

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('http://localhost:3001/api/users');
                if (response.ok) {
                    const usersData = await response.json();
                    setUsers(usersData);
                    console.log(usersData);
                } else {
                    console.error('Error fetching users:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchUsers();
    }, []);

    const nav = async (e) => {
        e.preventDefault()

        // navRout('/login')
        try {
            const response = await fetch('http://localhost:3001/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('User signed up successfully.');
            } else {
                console.error('Error signing up:', response.statusText);
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    }
    return (
        <Row style={{ height: "100%" }}>
            <Col sm={12} lg={4} style={{
                margin: "auto", backgroundColor: "white", textAlign: 'center',
                paddingTop: 20,
                paddingBottom: 20
            }}>
                <Row>
                    <Col>
                        <h1>
                            Sign Up
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <TextsFieldsInput
                                ControlId="fullname"
                                onTextChange={(e) => handleChange(e)}
                                placeholder="Full Name"
                                type="text"
                                name="fullname" />

                            <TextsFieldsInput
                                ControlId="emailaddress"
                                onTextChange={(e) => handleChange(e)}
                                placeholder="Enter Your EMail Address"
                                type="email"
                                name="email" />
                            <TextsFieldsInput
                                ControlId="password"
                                onTextChange={(e) => handleChange(e)}
                                placeholder="Enter Password"
                                type="password"
                                name="passward" />
                            <TextsFieldsInput
                                ControlId="retypepwd"
                                onTextChange={(e) => handleChange(e)}
                                placeholder="Re-Type Password"
                                type="password"
                                name="re_pass" />

                            <Button type='submit' onClick={nav}>
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default SignUp
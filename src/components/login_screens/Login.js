import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import TextsFieldsInput from "../Inputs/TextsFieldsInput";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "../../Store/rootSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [passward, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    const userCredentials = { email, passward };
    // axios.get('http://localhost:3001/api/login', userCredentials).then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // })
    axios
      .post("http://localhost:3001/api/login", userCredentials)
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch(logIn(response.data.user));
        navigate("/mainwindow");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    // try {
    //     const response = await fetch('http://localhost:3001/api/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(userCredentials),
    //     });

    //     if (response.ok) {
    //         console.log('Login successful. ' + response );
    //         // Redirect or perform any action after successful login
    //         // navigate('/mainwindow')
    //     } else {
    //         console.error('Error during login:', response.statusText);
    //     }
    // } catch (error) {
    //     console.error('Error during login:', error);
    // }
  };

  return (
    <Row style={{ height: "100%" }}>
      <Col
        sm={12}
        lg={4}
        style={{
          margin: "auto",
          backgroundColor: "white",
          textAlign: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Row>
          <Col>
            <h1>LogIn</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <TextsFieldsInput
                ControlId="emailaddress"
                onTextChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                type="email"
                name="email"
                label="Email Address"
              />
              <TextsFieldsInput
                ControlId="password"
                onTextChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                type="password"
                name="passward"
                label="Password"
              />
              <Button type="submit" onClick={handleLogin}>
                Sign In
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Not Have Account yet? <Link to={"/register"}>Signup here</Link>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Login;

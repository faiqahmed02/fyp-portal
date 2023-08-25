import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logOut } from '../../../Store/rootSlice';

function Header(props) {
    const state = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const nav = useNavigate();
    let { url, path } = useLocation
    const LogOut = () => {
        if (state !== null) {
            dispatch(logOut());
            nav('/')
        }

    }
    return (
        <Row className='main_header'>
            <Col>
                <div>
                    <ul>
                        <li>
                            <Link to={`/mainwindow/student`}>Students</Link>
                        </li>
                        <li>
                            <Link to={`/mainwindow/Groups`}>Groups</Link>
                        </li>
                        <li>
                            <Link to={`/mainwindow/Tasks`}>Task</Link>
                        </li>
                        <li>
                            <Link to={`/mainwindow/Projects`}>Projects</Link>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col style={{ margin: 'auto', textAlign: 'right' }}>
                <Button variant="dark" onClick={props.addFunction} style={{marginRight:20}}>{props.btntext}</Button>
                <Button variant='danger' onClick={LogOut}>Log Out</Button>
            </Col>
        </Row>
    )
}

export default Header

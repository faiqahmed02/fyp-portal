import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import AddStudentData from './AddStudentData'

function ModalWindow(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{"Add " + props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><AddStudentData /></Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow
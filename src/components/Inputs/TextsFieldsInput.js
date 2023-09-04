import React from "react";
import { Form } from "react-bootstrap";

function TextsFieldsInput(props) {
  return (
    <Form.Group className="mb-3" controlId={props.ControlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onTextChange}
        name={props.name}
        required
        accept={props.type === "file" ? "application/pdf" : ""}
      />
    </Form.Group>
  );
}

export default TextsFieldsInput;

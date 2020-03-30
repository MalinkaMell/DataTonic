import React from "react";
import { Form } from "react-bootstrap";

const Filter = props => {
  return (
    <Form>
      <Form.Group controlId={props.id}>
        <Form.Label className="small">{props.label}</Form.Label>
        <Form.Control as="select" custom>

          {props.options && props.options.map(item => <option key={item}>{item}</option>)}

        </Form.Control>
      </Form.Group>
    </Form>
  )
}

export default Filter;
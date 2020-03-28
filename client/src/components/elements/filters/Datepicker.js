import React, { useState } from "react";
import { DatePickerInput } from "rc-datepicker";
import { Form } from "react-bootstrap";
import "rc-datepicker/lib/style.css";


const Datepicker = props => {

  const [jsDate, setJsDate] = useState(new Date());

  return (
    <Form>
      <Form.Group controlId={props.id}>
        <Form.Label className="small">{props.label}</Form.Label>
        <DatePickerInput
          id={props.id}
          onChange={(date) => setJsDate(date)}
          value={jsDate}
        />
      </Form.Group>
    </Form>
  )
}

export default Datepicker;
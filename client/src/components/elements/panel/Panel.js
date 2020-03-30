import React from "react";
import { Card } from "react-bootstrap";
import "./Panel.css";

const Panel = props => {
  return (
    <Card>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  )
}

export default Panel;
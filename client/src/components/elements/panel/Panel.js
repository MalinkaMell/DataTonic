import React from "react";
import { Card } from "react-bootstrap";

const Panel = props => {
  return (
    <Card>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  )
}

export default Panel;
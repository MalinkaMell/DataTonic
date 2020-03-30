import React from "react";
import { Container, Row } from "react-bootstrap";

const Body = props => {
  return (
    <Container className="content">
      <Row>
        {props.children}
      </Row>
    </Container>
  )
}

export default Body;
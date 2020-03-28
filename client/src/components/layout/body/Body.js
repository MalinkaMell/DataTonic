import React from "react";
import "./Body.css";
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
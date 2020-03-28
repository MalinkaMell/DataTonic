import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return(
    <Container fluid>
      <Row className="footer py-4">
        <Container><small className="align-self-center">&copy; DataTonic 2020</small></Container>
      </Row>
    </Container>
  )
}

export default Footer;
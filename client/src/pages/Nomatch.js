import React from "react";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";

function NoMatch() {
  return (
    <Container fluid>
      <Row className="d-flex align-items-center vh-100">
        <Col xs={12} className="d-flex align-items-center w-50 justify-content-center">
          <Jumbotron  className="d-flex flex-column align-items-center">
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;

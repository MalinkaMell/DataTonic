import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Pagetitle.css";

const PageTitle = props => {

  return (
      <Row className="pt-4 w-100">
        <Col md="6 ml-0">
          <h3>{props.title}</h3>
        </Col>
        <Col md="6">
          <ul className="list-inline text-muted float-right">
            <li className="list-inline-item refresh">Next refresh: 115s
            <Button variant="link"><i className="fas fa-sync-alt"></i></Button>
            <Button variant="link"><i className="fas fa-pause"></i></Button></li>
            <li className="list-inline-item refresh">Last refresh: 5 mins ago</li>
          </ul>
        </Col>
      </Row>
  )
}

export default PageTitle;

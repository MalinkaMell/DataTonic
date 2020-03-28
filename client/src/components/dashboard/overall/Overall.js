import React from "react";
import { Image, Col } from "react-bootstrap";
import "./Overall.css"

const Overall = props => {
  const color = "text-danger"
  return (
    <Col md="4">
      <ul className="list-inline item">
        <li className="list-inline-item"><Image fluid src={`assets/${props.image}.png`} />
        </li>
        <li className="list-inline-item">
          <i className={`fa-2x far fa-dot-circle ${color}`}></i>
        </li>
      </ul>
    </Col>
  )
}

export default Overall;
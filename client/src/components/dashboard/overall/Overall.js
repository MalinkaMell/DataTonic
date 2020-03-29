import React from "react";
import { Image, Col } from "react-bootstrap";
import "./Overall.css"

const Overall = props => {

  //based on health value, assign different color
  const colors = (val) => {
    let color = "";
    if (val < 60) {
      color = "text-danger"
    } else if (val > 60 && val < 80) {
      color = "text-warning"
    } else {
      color = "text-success"
    }
    return color;
  }
  

  return (
    <Col md="4">
      <ul className="list-inline item">
        <li className="list-inline-item"><Image fluid src={`assets/${props.system}.png`} />
        </li>
        <li className="list-inline-item">
          <i className={`fa-2x far fa-dot-circle ${colors(props.health)}`}></i>
        </li>
      </ul>
    </Col>
  )
}

export default Overall;
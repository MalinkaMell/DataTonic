import React from "react";

const Subtitle = props => {
  return (
    <h5 className="mt-5">{props.title} <i className="fas fa-info-circle small text-muted"></i></h5>
  )
}

export default Subtitle;
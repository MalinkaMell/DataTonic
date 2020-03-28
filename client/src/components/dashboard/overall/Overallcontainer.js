import React from "react";
import Overall from "./Overall";
import { Row } from "react-bootstrap";

const options = ["Amazon", "Microsoft", "Logitech", "Intel", "Google"];

const OverallContainer = () => {
  return (
    <React.Fragment>
      {options.map(client =>
        <Overall key={client} image={client} />
      )}
    </React.Fragment>
  )
}

export default OverallContainer;
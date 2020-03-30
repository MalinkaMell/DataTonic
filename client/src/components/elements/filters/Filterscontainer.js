import React, { useContext } from "react";
import Filter from "./Filter";
import Datepicker from "./Datepicker";
import { Row, Col } from "react-bootstrap";
import { ChartContext } from "../../context/Chartscontext";

const Filters = () => {

  const { systems } = useContext(ChartContext);
  
  return (

    <Row className="mt-4 w-100">

      <Col md="3">
        <Filter
          label="Filter by Client"
          id="clients"
          options={systems}
        />
      </Col>

      <Col md="3">
        <Filter
          id="area"
          label="Filter by Area"
          options={["All"]} />
      </Col>

      <Col md="3">
        <Datepicker
          id="start"
          label="Start date" />
      </Col>

      <Col md="3">
        <Datepicker
          id="end"
          label="End Date" />
      </Col>

    </Row>
  )
}

export default Filters;
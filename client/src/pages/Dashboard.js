import React from "react";
import PageTitle from "../components/elements/pagetitle/Pagetitle";
import Filters from "../components/elements/filters/Filterscontainer";
import OverallContainer from "../components/dashboard/overall/Overallcontainer";
import Subtitle from "../components/elements/subtitle/Subtitle";
import { Row, Col } from "react-bootstrap";
import Panel from "../components/elements/panel/Panel";

const Dashboard = () => {
  return (
    <React.Fragment>
      <PageTitle title="Dashboard" />
      <Filters />
      <Row className="w-100">
        <Col>
          <Subtitle title="Transactions" />
        </Col>
      </Row>
      <Row className="w-100">
        <Col md="6">
          <Panel>
            <h1>By Area goes here</h1>
          </Panel>
        </Col>
        <Col md="6">
          <Panel>
          <h1>By Hours goes here</h1>
          </Panel>
        </Col>
      </Row>
      <Row className="w-100">
        <Col>
          <Subtitle title="Refunds" />
        </Col>
      </Row>
      <Row className="w-100">
        <Col md="6">
          <Panel>
            <h1>By Area goes here</h1>
          </Panel>
        </Col>
        <Col md="6">
          <Panel>
          <h1>By Hours goes here</h1>
          </Panel>
        </Col>
      </Row>
      <Row className="w-100">
        <Col>
          <Subtitle title="Lost Transactions &amp; Refunds" />
        </Col>
      </Row>
      <Row className="w-100">
        <Col>
          <Panel>
            <h1>By System goes here</h1>
          </Panel>
        </Col>
      </Row>
      <Row className="w-100">
        <Col>
          <Subtitle title="Overall Health" />
        </Col>
      </Row>
      <Row className="w-100">
        <OverallContainer />
      </Row>
    </React.Fragment>
  )
}

export default Dashboard;
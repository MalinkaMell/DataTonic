import React from "react";
import PageTitle from "../components/elements/pagetitle/Pagetitle";
import Filters from "../components/elements/filters/Filterscontainer";
import OverallContainer from "../components/dashboard/overall/Overallcontainer";
import Subtitle from "../components/elements/subtitle/Subtitle";
import { Row, Col } from "react-bootstrap";
import Panel from "../components/elements/panel/Panel";
import TransactionsByArea from "../components/dashboard/transactions/First";
import Refunds from "../components/dashboard/refunds/First";
import TransactionsByHours from "../components/dashboard/transactions/Second";
import RefundsByHours from "../components/dashboard/refunds/Second";
import Lost from "../components/dashboard/lost/Lost";

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
            <TransactionsByArea />
          </Panel>
        </Col>
        <Col md="6">
          <Panel>
            <TransactionsByHours />
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
            <Refunds />
          </Panel>
        </Col>
        <Col md="6">
          <Panel>
            <RefundsByHours />
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
            <Lost />
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
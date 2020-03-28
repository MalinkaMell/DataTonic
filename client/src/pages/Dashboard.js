import React from "react";
import PageTitle from "../components/elements/pagetitle/Pagetitle";
import Filters from "../components/elements/filters/Filterscontainer";
import OverallContainer from "../components/dashboard/overall/Overallcontainer";
import Subtitle from "../components/elements/subtitle/Subtitle";
import { Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <React.Fragment>
      <PageTitle title="Dashboard" />
      <Filters />
      <Subtitle title="Overall Health" />
      <Row className="w-100">
        <OverallContainer />
      </Row>
    </React.Fragment>
  )
}

export default Dashboard;
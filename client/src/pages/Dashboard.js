import React from "react";
import PageTitle from "../components/elements/pagetitle/Pagetitle";
import Filters from "../components/elements/filters/Filterscontainer";

const Dashboard = () => {
  return (
    <React.Fragment>
      <PageTitle title="Dashboard" />
      <Filters />
    </React.Fragment>
  )
}

export default Dashboard;
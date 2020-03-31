import React, { useContext } from "react";
import { ChartContext } from "../../context/Chartscontext";
import BarChart from "../charts/Barchart";

const Refunds = () => {

  const { systems, success, errors, warnings } = useContext(ChartContext);

  //chart data
  const chartData = {
    labels: systems,
    datasets: [
      {
        label: "Success",
        data: success,
        backgroundColor: "darkgreen",
        hoverBackgroundColor: "green",
        barPercentage: .7
      },
      {
        label: "Error",
        data: errors,
        backgroundColor: "darkred",
        hoverBackgroundColor: "red",
        barPercentage: .7
      },
      {
        label: "Warnings",
        data: warnings,
        backgroundColor: "orange",
        hoverBackgroundColor: "yellow",
        barPercentage: .7
      }
    ]
  }

  return (
    <React.Fragment>
      <BarChart chartData={chartData} text="Number of Refunds" title="By Passed, Failed and Warning" />
    </React.Fragment>
  )
}

export default Refunds;
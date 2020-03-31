import React, { useContext } from "react";
import { ChartContext } from "../../context/Chartscontext";
import BarChart from "../charts/Barchart";

const TransactionsByArea = () => {

  const { systems, success, errors } = useContext(ChartContext);

  //chart data
  const chartData = {
    labels: systems,
    datasets: [
      {
        label: "Success",
        data: success,
        backgroundColor: "darkgreen",
        hoverBackgroundColor: "green",
        barPercentage: .6
      },
      {
        label: "Error",
        data: errors,
        backgroundColor: "darkred",
        hoverBackgroundColor: "red",
        barPercentage: .6
      }
    ]
  }

  return (
    <React.Fragment>
      <BarChart chartData={chartData} text="Number of Transactions" title="By Area" />
    </React.Fragment>
  )
}

export default TransactionsByArea;
import React, { useContext } from "react";
import { ChartContext } from "../../context/Chartscontext";
import LineChart from "../charts/Linechart";
import { helper, dataset, labels } from "../charts/Helper";

const TransactionsByHours = () => {

  const { successTransactions, successRate, warningPivot } = useContext(ChartContext);

  helper(successTransactions);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Sales",
        data: dataset,
        borderColor: "darkgreen",
        fill: false,
        tension: 0,
        pointStyle: "line",
        borderWidth: 2
      },
      {
        label: "Average",
        data: new Array(labels.length).fill(successRate),
        borderColor: "blue",
        fill: false,
        tension: 0,
        pointStyle: "line",
        borderWidth: 2
      },
      {
        label: "Warning Pivot",
        data: new Array(labels.length).fill(warningPivot),
        borderColor: "yellow",
        fill: false,
        tension: 0,
        pointStyle: "line",
        borderWidth: 2
      }
    ]
  }

  return (
    <React.Fragment>
      <LineChart chartData={chartData} text="Success rate" title="By Hour" />
    </React.Fragment>
  )
}

export default TransactionsByHours;
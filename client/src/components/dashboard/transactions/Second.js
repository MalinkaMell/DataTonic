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
        fill: false
      },
      {
        label: "Average",
        data: new Array(labels.length).fill(successRate),
        borderColor: "blue",
        fill: false
      },
      {
        label: "Warning Pivot",
        data: new Array(labels.length).fill(warningPivot),
        borderColor: "yellow",
        fill: false
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
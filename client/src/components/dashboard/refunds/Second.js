import React, { useContext } from "react";
import { ChartContext } from "../../context/Chartscontext";
import LineChart from "../charts/Linechart";
import { helper, dataset, labels } from "../charts/Helper";

const RefundsByHours = () => {
  const { refunds, successRate, warningPivot } = useContext(ChartContext);
console.log(dataset);

  helper(refunds);

  //chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Refunds",
        data: dataset,
        borderColor: "darkgreen",
        fill: false,
        tension: 0,
        pointStyle: "line",
        borderWidth: 2
      },
      {
        label: "Average",
        data: new Array(dataset.length).fill(successRate),
        borderColor: "blue",
        fill: false,
        tension: 0,
        pointStyle: "line",
        borderWidth: 2
      },
      {
        label: "Warning Pivot",
        data: new Array(dataset.length).fill(warningPivot),
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
      <LineChart chartData={chartData} text="Refunds rate" title="By Hour" />
    </React.Fragment>
  )
}

export default RefundsByHours;
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
        fill: false
      },
      {
        label: "Average",
        data: new Array(dataset.length).fill(successRate),
        borderColor: "blue",
        fill: false
      },
      {
        label: "Warning Pivot",
        data: new Array(dataset.length).fill(warningPivot),
        borderColor: "yellow",
        fill: false
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
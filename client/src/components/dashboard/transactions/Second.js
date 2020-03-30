import React, { useContext } from "react";
import { ChartContext } from "../../context/Chartscontext";
import LineChart from "../charts/Linechart";
import { helper, labels } from "../charts/Helper";

const TransactionsByHours = () => {

  const { successTransactions, successRate, warningPivot } = useContext(ChartContext);

  //creating initial dataset object, going to add number of transactions based on hour
  const dataset = [{ t: 15, y: 0 }, { t: 16, y: 0 }, { t: 17, y: 0 }, { t: 18, y: 0 }, { t: 19, y: 0 }, { t: 20, y: 0 }, { t: 21, y: 0 }, { t: 22, y: 0 }, { t: 23, y: 0 }, { t: 24, y: 0 }];

  helper(successTransactions, dataset);

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
      <LineChart chartData={chartData} text="Success rate" title="By Hour" />
    </React.Fragment>
  )
}

export default TransactionsByHours;
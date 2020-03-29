import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { ChartContext } from "../../context/Chartscontext";


const TransactionsByArea = () => {
  const { systems, success, errors } = useContext(ChartContext);

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
      <h5 className="mb-3">By Area</h5>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: {
            display: true,
            text: 'Number of Transactions',
            position: "left"
          },
          legend: {
            display: true,
            position: "bottom"
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: "System"
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                min: 0,
                max: 100,
                stepSize: 20
              }
            }]
          }
        }}
      />
    </React.Fragment>

  )
}

export default TransactionsByArea;
import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { ChartContext } from "../../context/Chartscontext";


const Refunds = () => {
  
  const { systems, success, errors, warnings } = useContext(ChartContext);

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
      <h5 className="mb-3">By Passed, Failed and Warning</h5>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "Number of Refunds",
            position: "left"
          },
          legend: {
            display: true,
            position: "bottom"
          },
          tooltips: {
            mode: "index",
            intersect: true,
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

export default Refunds;
import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = props => {
  return (
    <React.Fragment>
      <h5 className="mb-3">By Area</h5>
      <Bar
        data={props.chartData}
        options={{
          responsive: true,
          title: {
            display: true,
            text: props.title,
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

export default BarChart;
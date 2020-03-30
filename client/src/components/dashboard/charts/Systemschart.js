import React from "react";
import { Line } from "react-chartjs-2";

const SystemChart = props => {
  return (
    <React.Fragment>
      <h5 className="mb-3">{props.title}</h5>
      <Line
        data={props.chartData}
        options={{
          responsive: true,
          title: {
            display: true,
            text: props.text,
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
              display: true
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

export default SystemChart;
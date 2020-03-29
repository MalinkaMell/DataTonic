import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { ChartContext } from "../../context/Chartscontext";


const RefundsByHours = () => {
  const { refunds, successRate, warningPivot } = useContext(ChartContext);
  console.log(refunds)

  const h = refunds.map(item => new Date(item).getHours());

  const labels = ["3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm", "11:00 pm", "12:00 am"];

  const dataset = [{ t: 15, y: 0 }, { t: 16, y: 0 }, { t: 17, y: 0 }, { t: 18, y: 0 }, { t: 19, y: 0 }, { t: 20, y: 0 }, { t: 21, y: 0 }, { t: 22, y: 0 }, { t: 23, y: 0 }, { t: 24, y: 0 }];

  
  for (let i = 0; i < 24; i++) {

    h.map(hour => {
      if (hour === i && hour < i + 1) {
        dataset.map((item => item.t === i && item.y++))
      }
    })
  }

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
      <h5 className="mb-3">By Hours</h5>
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "Refunds rate",
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

export default RefundsByHours;
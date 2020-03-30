import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { ChartContext } from "../../context/Chartscontext";
import SystemChart from "../charts/Systemschart";


const Lost = () => {
  
  const { lost } = useContext(ChartContext);

  const amazon = lost.filter(({ system }) => system === 1).map(({ datetime }) => new Date(datetime).getHours());
  const microsoft = lost.filter(({ system }) => system === 2).map(({ datetime }) => new Date(datetime).getHours());
  const logitech = lost.filter(({ system }) => system === 3).map(({ datetime }) => new Date(datetime).getHours());
  const intel = lost.filter(({ system }) => system === 4).map(({ datetime }) => new Date(datetime).getHours());
  const google = lost.filter(({ system }) => system === 5).map(({ datetime }) => new Date(datetime).getHours());

  const labels = ["3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm", "11:00 pm", "12:00 am"];

  const amazonData = [{ t: 15, y: 0 }, { t: 16, y: 0 }, { t: 17, y: 0 }, { t: 18, y: 0 }, { t: 19, y: 0 }, { t: 20, y: 0 }, { t: 21, y: 0 }, { t: 22, y: 0 }, { t: 23, y: 0 }, { t: 24, y: 0 }];

  const microsoftData = [{ t: 15, y: 0 }, { t: 16, y: 0 }, { t: 17, y: 0 }, { t: 18, y: 0 }, { t: 19, y: 0 }, { t: 20, y: 0 }, { t: 21, y: 0 }, { t: 22, y: 0 }, { t: 23, y: 0 }, { t: 24, y: 0 }];

  const logitechData = [{ t: 15, y: 0 }, { t: 16, y: 0 }, { t: 17, y: 0 }, { t: 18, y: 0 }, { t: 19, y: 0 }, { t: 20, y: 0 }, { t: 21, y: 0 }, { t: 22, y: 0 }, { t: 23, y: 0 }, { t: 24, y: 0 }];

  const intelData = [{ t: 15, y: 0 }, { t: 16, y: 0 }, { t: 17, y: 0 }, { t: 18, y: 0 }, { t: 19, y: 0 }, { t: 20, y: 0 }, { t: 21, y: 0 }, { t: 22, y: 0 }, { t: 23, y: 0 }, { t: 24, y: 0 }];
  
  const googleData = [{ t: 15, y: 0 }, { t: 16, y: 0 }, { t: 17, y: 0 }, { t: 18, y: 0 }, { t: 19, y: 0 }, { t: 20, y: 0 }, { t: 21, y: 0 }, { t: 22, y: 0 }, { t: 23, y: 0 }, { t: 24, y: 0 }];

  const createDatasetByVendor = (system, dataset) => {
    for (let i = 0; i < 24; i++) {
      system.map(hour => {
        if (hour === i && hour < i + 1) {
          dataset.map((item => item.t === i && item.y++))
        }
      })
    }
  }

  createDatasetByVendor(amazon, amazonData);
  createDatasetByVendor(microsoft, microsoftData);
  createDatasetByVendor(logitech, logitechData);
  createDatasetByVendor(intel, intelData);
  createDatasetByVendor(google, googleData);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Amazon",
        data: amazonData,
        borderColor: "green",
        fill: false
      },
      {
        label: "Microsoft",
        data: microsoftData,
        borderColor: "blue",
        fill: false
      },
      {
        label: "Logitech",
        data: logitechData,
        borderColor: "orange",
        fill: false
      },
      {
        label: "Intel",
        data: intelData,
        borderColor: "lightblue",
        fill: false
      }
      ,
      {
        label: "Google",
        data: googleData,
        borderColor: "gray",
        fill: false
      }
    ]
  }

  return (
    <React.Fragment>
      <SystemChart chartData={chartData} text="Refunds rate" title="By Hours" />
    </React.Fragment>
  )
}

export default Lost;
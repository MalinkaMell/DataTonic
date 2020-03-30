import React, { useContext } from "react";
import { ChartContext } from "../../context/Chartscontext";
import SystemChart from "../charts/Systemschart";


const Lost = () => {
  
  const { lost } = useContext(ChartContext);

  const amazon = lost.filter(({ system }) => system === 1).map(({ datetime }) => new Date(datetime).getHours());
  const microsoft = lost.filter(({ system }) => system === 2).map(({ datetime }) => new Date(datetime).getHours());
  const logitech = lost.filter(({ system }) => system === 3).map(({ datetime }) => new Date(datetime).getHours());
  const intel = lost.filter(({ system }) => system === 4).map(({ datetime }) => new Date(datetime).getHours());
  const google = lost.filter(({ system }) => system === 5).map(({ datetime }) => new Date(datetime).getHours());

  const labels = ["12:00 am", "1:00 am", "1:00 am", "2:00 am", "4:00 am", "5:00 am", "6:00 am", "7:00 am", "8:00 am"];

  const amazonData = [{ t: 0, y: 0 }, { t: 1, y: 0 }, { t: 2, y: 0 }, { t: 3, y: 0 }, { t: 4, y: 0 }, { t: 5, y: 0 }, { t: 6, y: 0 }, { t: 7, y: 0 }, { t: 8, y: 0 }];
console.log(amazonData);

  const microsoftData = [{ t: 0, y: 0 }, { t: 1, y: 0 }, { t: 2, y: 0 }, { t: 3, y: 0 }, { t: 4, y: 0 }, { t: 5, y: 0 }, { t: 6, y: 0 }, { t: 7, y: 0 }, { t: 8, y: 0 }];

  const logitechData = [{ t: 0, y: 0 }, { t: 1, y: 0 }, { t: 2, y: 0 }, { t: 3, y: 0 }, { t: 4, y: 0 }, { t: 5, y: 0 }, { t: 6, y: 0 }, { t: 7, y: 0 }, { t: 8, y: 0 }];

  const intelData = [{ t: 0, y: 0 }, { t: 1, y: 0 }, { t: 2, y: 0 }, { t: 3, y: 0 }, { t: 4, y: 0 }, { t: 5, y: 0 }, { t: 6, y: 0 }, { t: 7, y: 0 }, { t: 8, y: 0 }];
  
  const googleData = [{ t: 0, y: 0 }, { t: 1, y: 0 }, { t: 2, y: 0 }, { t: 3, y: 0 }, { t: 4, y: 0 }, { t: 5, y: 0 }, { t: 6, y: 0 }, { t: 7, y: 0 }, { t: 8, y: 0 }];

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
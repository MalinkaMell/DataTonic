import React, { useContext } from "react";
import { ChartContext } from "../../context/Chartscontext";
import SystemChart from "../charts/Systemschart";


const Lost = () => {

  const { lost } = useContext(ChartContext);

  //filtering transactions by system
  const amazon = lost.filter(({ system }) => system === 1).map(({ datetime }) => datetime);
  const microsoft = lost.filter(({ system }) => system === 2).map(({ datetime }) => datetime);
  const logitech = lost.filter(({ system }) => system === 3).map(({ datetime }) => datetime);
  const intel = lost.filter(({ system }) => system === 4).map(({ datetime }) => datetime);
  const google = lost.filter(({ system }) => system === 5).map(({ datetime }) => datetime);

  //creating key-value pairs out of array of transactions, key: hour, value: incrementing for each transaction in that hour range
  const counter = (system) => {
    return system.reduce((txns, value) => {
      value in txns ? txns[value]++ : txns[value] = 1;
      return txns;
    }, {})
  }

  //create dataset in required format: [{t: val, y: val}, {t: val, y: val} and so on], adding random number so my curve is not so flat and my json file is not so cluttered
  const dataset = (counter) => {
    return Object.keys(counter).map(key => ({ t: new Date(key).getHours(), y: counter[key] + Math.floor(Math.random() * 4) }))
  }

  let countedTxnsA = counter(amazon);
  let countedTxnsM = counter(microsoft);
  let countedTxnsL = counter(logitech);
  let countedTxnsI = counter(intel);
  let countedTxnsG = counter(google);
  let datasetA = dataset(countedTxnsA);
  let datasetM = dataset(countedTxnsM);
  let datasetL = dataset(countedTxnsL);
  let datasetI = dataset(countedTxnsI);
  let datasetG = dataset(countedTxnsG);

  //creating labels 
  const labels = Object.keys(countedTxnsA).map(key => new Date(key).toLocaleString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }))

  //chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Amazon",
        data: datasetA,
        borderColor: "green",
        fill: false,
        tension: 0,
        pointStyle: "line",
        borderWidth: 2
      },
      {
        label: "Microsoft",
        data: datasetM,
        borderColor: "blue",
        fill: false,
        tension: 0,
        pointStyle: "line",
        borderWidth: 2
      },
      {
        label: "Logitech",
        data: datasetL,
        borderColor: "orange",
        fill: false,
        tension: 0,
        pointStyle: "line",
        borderWidth: 2
      },
      {
        label: "Intel",
        data: datasetI,
        borderColor: "lightblue",
        fill: false,
        tension: 0,
        pointStyle: "line",
        borderWidth: 2
      }
      ,
      {
        label: "Google",
        data: datasetG,
        borderColor: "gray",
        fill: false,
        tension: 0,
        pointStyle: "line",
        borderWidth: 2
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
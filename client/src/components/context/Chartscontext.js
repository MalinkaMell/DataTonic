import React, { useState, useEffect } from "react";
import axios from "axios";
const ChartContext = React.createContext()

const ChartContextProvider = props => {

  //state
  const [results, setResults] = useState([]);
  const [successRate, setSuccessRate] = useState(0);
  const [warningPivot, setWarningPivot] = useState(0);


  //data by type
  const systems = [];
  const success = [];
  const errors = [];
  const warnings = [];
  const successTransactions = [];
  const refunds = [];
  const lost = [];

//systems
  for (const prop in results.systems) {
    systems.push(prop);
  }

  //success
  for (const prop in results.systems) {
    success.push(results.systems[prop].data.success);
  }

  //errors
  for (const prop in results.systems) {
    errors.push(results.systems[prop].data.error);
  }

  //warnings
  for (const prop in results.systems) {
    warnings.push(results.systems[prop].data.warning);
  }

  //successfull transactions
  for (const prop in results.transactions) {
    if (results.transactions[prop].type === "success") {
      successTransactions.push(results.transactions[prop].datetime);
    }
  }

  //refunds
  for (const prop in results.transactions) {
    if (results.transactions[prop].type === "refund") {
      refunds.push(results.transactions[prop].datetime);
    }
  }

  //lost (refunds or failed)
  for (const prop in results.transactions) {
    if (results.transactions[prop].type === "refund" || results.transactions[prop].type === "failed") {
      lost.push({ datetime: results.transactions[prop].datetime, system: results.transactions[prop].system_id });
    }
  }

//fetching data
  useEffect(() => {
    axios
      .get("/api/data")
      .then(response => { setResults(response.data) })
      .catch(error => console.log(error))
    axios
      .get("api/successrate")
      .then(response => { setSuccessRate(response.data) })
      .catch(error => console.log(error))
    axios
      .get("api/warningpivot")
      .then(response => { setWarningPivot(response.data) })
      .catch(error => console.log(error))
  }, [])

  return (
    <ChartContext.Provider value={{ results, systems, success, errors, warnings, successTransactions, successRate, warningPivot, refunds, lost }}>
      {props.children}
    </ChartContext.Provider>
  )
}

export { ChartContextProvider, ChartContext };
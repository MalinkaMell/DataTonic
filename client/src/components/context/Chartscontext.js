import React, { useState, useEffect } from "react";
import axios from "axios";
const ChartContext = React.createContext()

const ChartContextProvider = props => {

  const [results, setResults] = useState([]);
  const [successRate, setSuccessRate] = useState(0);
  const [warningPivot, setWarningPivot] = useState(0);

  const systems = [];
  const success = [];
  const errors = [];
  const warnings = [];
  const successTransactions = [];
  const refunds = [];
  const lost = [];

  for (const prop in results.systems) {
    systems.push(prop);
  }

  for (const prop in results.systems) {
    success.push(results.systems[prop].data.success);
  }

  for (const prop in results.systems) {
    errors.push(results.systems[prop].data.error);
  }

  for (const prop in results.systems) {
    warnings.push(results.systems[prop].data.warning);
  }

  for (const prop in results.transactions) {
    if (results.transactions[prop].type === "success") {
      successTransactions.push(results.transactions[prop].datetime);
    }
  }

  for (const prop in results.transactions) {
    if (results.transactions[prop].type === "refund") {
      refunds.push(results.transactions[prop].datetime);
    }
  }

  for (const prop in results.transactions) {
    if (results.transactions[prop].type === "refund" || results.transactions[prop].type === "failed") {
      lost.push({ datetime: results.transactions[prop].datetime, system: results.transactions[prop].system_id });
    }
  }


  useEffect(() => {
    axios
      .get("/api/data")
      .then(response => { setResults(response.data) })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    axios
      .get("api/successrate")
      .then(response => { setSuccessRate(response.data) })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
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
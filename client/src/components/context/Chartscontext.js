import React, { useState, useEffect } from "react";
import axios from "axios";
const ChartContext = React.createContext()

const ChartContextProvider = props => {

  const [results, setResults] = useState([]);

  const systems = [];
  const success = [];
  const errors = [];
  const warnings = [];

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

  useEffect(() => {
    axios
      .get("api/data")
      .then(response => {setResults(response.data)})
      .catch(error => console.log(error))
  }, [])

  return (
    <ChartContext.Provider value={{ results, systems, success, errors, warnings }}>
        {props.children}
    </ChartContext.Provider>
)
}

export { ChartContextProvider, ChartContext };
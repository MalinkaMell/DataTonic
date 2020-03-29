import React, { useContext } from "react";
import Overall from "./Overall";
import { ChartContext } from "../../context/Chartscontext";

const OverallContainer = () => {

  //pulling data from context
  const { systems, success, errors } = useContext(ChartContext);

//calculating average: 100% minus errors divided by sum of errors and success, multiply by 100 to get decimal value
  const average = (errors, success) => {
    return Math.floor(100 - ((errors / (errors + success)) * 100))
  }

  //making key-value pairs out of array of systems and calculated average
  const health = systems.reduce((acc, val, i) => {
    acc[val] = acc[val] ? acc[val] + ", " + average(errors[i], success[i]) : average(errors[i], success[i]);
    return acc;
  }, {})

  //mapping health and passing to overall component info nessesary for health display
  return (
    <React.Fragment>
      {
        Object.keys(health).map(key =>
          <Overall key={key} system={key} health={health[key]} />
        )
      }
    </React.Fragment>
  )
}

export default OverallContainer;
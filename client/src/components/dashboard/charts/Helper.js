//helper function, creating datasets and labels for linecharts
let countedTxns = {};
export let dataset = [];
export let labels =[];
export const helper = (action) => {
  //creating key-value pairs out of array of transactions, key: hour, value: incrementing for each transaction in that hour range
  countedTxns = action.reduce((txns, value) => { 
    value in txns ? txns[value]++ : txns[value] = 1;
    return txns;
  }, {})

  //create dataset in required format: [{t: val, y: val}, {t: val, y: val} and so on], adding random number so my curve is not so flat and my json file is not so cluttered
  dataset = Object.keys(countedTxns).map(key => ({t: new Date(key).getHours(), y: countedTxns[key] + Math.floor(Math.random() * 60 + 30)}))
  //creating labels froum hours of transactions
  labels = Object.keys(countedTxns).map(key => new Date(key).toLocaleString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }))
}
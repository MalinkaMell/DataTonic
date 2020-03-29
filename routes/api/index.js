const router = require("express").Router();
const jsonData = require("../../data.json"); 

const success = [];
const warning = [];

for (const prop in jsonData.systems) {
  success.push(jsonData.systems[prop].data.success);
}

for (const prop in jsonData.systems) {
  warning.push(jsonData.systems[prop].data.warning);
}

router.get("/data", (req, res) => {
  res.json(jsonData)
});

router.get("/successrate", (req, res) => {
  res.json(success.reduce((acc, val) => acc + val) / success.length)
});

router.get("/warningpivot", (req, res) => {
  res.json(warning.reduce((acc, val) => acc + val) / warning.length)
});

module.exports = router;
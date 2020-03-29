const router = require("express").Router();
const jsonData = require("../../data.json"); 

router.get("/data", (req, res) => {
  console.log(jsonData)
  res.json(jsonData)
});

module.exports = router;
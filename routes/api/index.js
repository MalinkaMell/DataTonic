const router = require("express").Router();

router.get("/data", (req, res) => {
  res.send("i am alive")
});

module.exports = router;
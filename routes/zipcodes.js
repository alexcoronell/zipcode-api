const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("show all zipcodes");
});

router.get("/:zip", (req, res) => {
  const { zip } = req.params;
  res.send(zip);
});

module.exports = router;

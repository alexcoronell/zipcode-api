const express = require("express");
const ZipcodeServices = require('../services/zipcodeServices')
const router = express.Router();
const service = new ZipcodeServices()

router.get("/", async(req, res) => {
    const zipcodes = await service.find()
    res.json(zipcodes)
});

router.get("/:zip", (req, res) => {
  const { zip } = req.params;
  res.send(zip);
});

module.exports = router;

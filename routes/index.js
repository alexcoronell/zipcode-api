const express = require("express");
const zipcodes = require("./zipcodes");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/zipcodes", zipcodes);
};

module.exports = routerApi;

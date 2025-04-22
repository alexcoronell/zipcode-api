const express = require("express");
const zipcodes = require("./zipcodes");

/* Middlewares */
const { verifyApiKey } = require("../middlewares/apikey.middleware");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/zipcodes", verifyApiKey, zipcodes);
};

module.exports = routerApi;

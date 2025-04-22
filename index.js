const express = require("express");
const cors = require("cors");
require('dotenv').config();
const routerApi = require('./routes')

const app = express();
const port = process.env.PORT || 3000;

// Middleware para verificar la API key
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(403).send("Forbidden: Invalid API key");
  }
};

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
    allowedHeaders: ["x-api-key", "Access-Control-Allow-Origin"],
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running",
  });
});

app.use(express.json());
routerApi(app);

app.listen(port, () => {
  console.log("Port: " + port);
});

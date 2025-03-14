const express = require("express");
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

// Usa el middleware para todas las rutas
//app.use(apiKeyMiddleware);

app.get("/", (req, res) => {
  res.send("Zipcode API");
});

app.use(express.json());
routerApi(app);

app.listen(port, () => {
  console.log("Port: " + port);
});

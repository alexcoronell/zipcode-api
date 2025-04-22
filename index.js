const express = require("express");
const cors = require("cors");
require('dotenv').config();
const routerApi = require('./routes')

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = { 
  origin: "*",
  methods: ["GET"],
  allowedHeaders: ["x-api-key", "Access-Control-Allow-Origin"],
};

app.use(
  cors(corsOptions)
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

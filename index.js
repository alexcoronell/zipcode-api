const express = require("express");
const routerApi = require('./routes')

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Zipcode API");
});

app.use(express.json());
routerApi(app);

app.listen(port, () => {
  console.log("Port: " + port);
});

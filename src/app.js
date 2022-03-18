require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(routes);

const port = process.env.SERVER_PORT || 8080;

app.listen(port, () => {
  return console.log(`Server is running in port ${port}! 🚀`);
});

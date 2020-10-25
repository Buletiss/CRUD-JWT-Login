const express = require("express");
const app = express();
const routes = require("./routes");
const db = require("./db");


require("dotenv-safe").config()


app.use(express.json());
app.use(routes);


module.exports = app;

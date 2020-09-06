const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: process.env.CLIENT_URL }));
  app.use(morgan("dev"));
}

app.use(express.json());

module.exports = app;

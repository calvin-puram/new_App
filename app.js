const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
require("pug");

const authRoute = require("./routes/auth.routes");
const globalError = require("./controllers/globalError");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: process.env.CLIENT_URL }));
  app.use(morgan("dev"));
}

app.use(express.json());
app.set("view engine", "pug");
app.set("views;", path.join(__dirname, "views"));

app.use("/api/v1/", authRoute);
app.use(globalError);
app.use("*", (req, res) => {
  res.json({ success: false, msg: "page not found" });
});

module.exports = app;

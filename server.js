const express = require("express");
const dotenv = require("dotenv");

const ConnectDB = require("./db");
const router = require("./routes");

dotenv.config({ path: "./.env" });

const app = express();

ConnectDB();

app.use(morgan("dev"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

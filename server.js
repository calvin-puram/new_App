const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./db");
const router = require("./routes");

dotenv.config({ path: "./.env" });

const app = express();
app.use(morgan("dev"));
connectDB();

app.use("/api", router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

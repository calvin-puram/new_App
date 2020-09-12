const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./db");
const router = require("./routes");
const cors = require("cors");

dotenv.config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
connectDB();

app.use("/api", router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

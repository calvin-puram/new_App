const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: "./.env" });
const app = require("./app");

//connect Db
connectDB();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

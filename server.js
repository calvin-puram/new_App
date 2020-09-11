const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");

const ConnectDB = require("./db");
const router = require("./routes");

dotenv.config({ path: "./.env" });
require("./passport")(passport);

const app = express();
ConnectDB();
app.use(morgan("dev"));

const sess = {
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: {},
};

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
  sess.cookie.secure = true;
}
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

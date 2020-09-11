const express = require("express");
const router = express.Router();
const User = require("./model/Users");

router.post("/googleLogin", (req, res) => {
  res.send("hello");
});

module.exports = router;

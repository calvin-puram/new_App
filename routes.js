const express = require("express");

const router = express.Router();

router.post((req, res) => {
  res.send("send request");
});

module.exports = router;

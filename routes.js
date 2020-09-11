const express = require("express");
const passport = require("passport");

const router = express.Router();

// login
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
// callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {}
);

module.exports = router;

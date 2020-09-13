const express = require("express");
const router = express.Router();
const User = require("./model/Users");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const sendToken = (user, res) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  const { id, name, email } = user;
  res.status(200).json({
    success: true,
    token,
    user: { name, email, id },
  });
};

router.post("/googleLogin", (req, res) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({ idToken: tokenId, audience: process.env.GOOGLE_CLIENT_ID })
    .then(async (response) => {
      if (response.payload.email_verified) {
        const { name, email } = response.payload;
        const user = await User.findOne({ email });
        if (user) {
          sendToken(user, res);
        } else {
          const password = `${email}-${name}`;
          const user = await User.create({ name, email, password });
          sendToken(user, res);
        }
      }
    });
});

router.post("/facebookLogin", (req, res) => {
  const { accessToken, userID } = req.body;
  const urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

  fetch(urlGraphFacebook, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // const {name, email} = res;
    })
    .catch((err) => console.log(err.message));
});

module.exports = router;

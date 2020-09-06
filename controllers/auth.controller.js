const Users = require("../models/auth.model");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const SendEmail = require("../utils/email");

const sendToken = (user) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  return token;
};

exports.register = catchAsync(async (req, res, next) => {
  const user = await Users.create(req.body);
  const token = sendToken(user);
  const url =
    process.env.NODE_ENV === "development"
      ? `${process.env.CLIENT_URL}/users/activate/${token}`
      : `https://devcoaching.herokuapp.com/bootcamps/users/activate/${token}`;
  await new SendEmail(user, url).sendWelcome();

  res.status(201).json({
    success: true,
    msg: `Activation link has been sent to ${user.email}`,
  });
});

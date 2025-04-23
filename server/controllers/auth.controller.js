const catchAsync = require("../utils/catchAsync");
const generateToken = require("../utils/generateToken");
const AppError = require("../utils/AppError");
const User = require("../models/User");

// Register Controller
const registerController = catchAsync(async (req, res, next) => {
  // Create new user
  const user = await User.create(req.body);

  // Check user for error
  if (!user) {
    return next(new AppError("Failed to register.", 404, false));
  }

  // Generate a jwt token
  const token = generateToken(user);

  // Respond to client with token
  res.status(200).json({
    statusCode: 200,
    ok: true,
    msg: "Successfully registered an account.",
    token: token,
  });
});

// Login Controller
const loginController = catchAsync(async (req, res, next) => {
  // Get email and password
  const { email, password } = req.body;

  // Get User
  const user = await User.findOne({ email });

  // Check if user exist and Check password if match
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({
      statusCode: 401,
      ok: false,
      msg: "Email or Password is invalid!",
    });
  }

  // Generate token
  const token = generateToken(user);

  // Respond to client with token
  res.status(200).json({
    statusCode: 200,
    ok: true,
    msg: "Successfully login!",
    token: token,
  });
});

module.exports = {
  registerController,
  loginController,
};

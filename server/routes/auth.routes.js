const express = require("express");
const router = express.Router();
const {
  registerController,
  loginController,
} = require("../controllers/auth.controller.js");
const validateUser = require("../middlewares/validateUser.js");
const validateLogin = require("../middlewares/validateLogin.js");

// Register Route
router.post("/register", validateUser, registerController);

// Login Route
router.post("/login", validateLogin, loginController);

module.exports = router;

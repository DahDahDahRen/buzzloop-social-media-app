const loginValidate = require("../utils/loginValidate");

const validateLogin = (req, res, next) => {
  // Validate login credintials
  const { error } = loginValidate.validate(req.body);

  // Check for error
  if (error) {
    return res.status(404).json({
      message: error.details[0].message,
      statusCode: 404,
      isOkay: false,
    });
  }

  // Go to next middleware
  next();
};

module.exports = validateLogin;

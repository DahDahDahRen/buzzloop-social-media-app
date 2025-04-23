const userValidate = require("../utils/userValidate");

const validateUser = (req, res, next) => {
  // Check error if any
  const { error } = userValidate.validate(req.body);

  // Responsd to user
  if (error) {
    return res.status(404).json({
      message: error.details[0].message,
      statusCode: 404,
      isOkay: false,
    });
  }

  next();
};

module.exports = validateUser;

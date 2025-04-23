const AppError = require("../utils/AppError");

// Custom Error middleware
const customError = (err, req, res, next) => {
  // Check if err object is instance of App Error
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ statusCode: err.statusCode, ok: err.ok, message: err.message });
  }

  // Default Error handler
  res.status(505).json({ statusCode: 505, ok: false, msg: err });
};

module.exports = customError;

const Joi = require("joi");

// Validate the user input
const userValidate = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().required().lowercase(),
  password: Joi.string().required().min(6).max(16),
});

module.exports = userValidate;

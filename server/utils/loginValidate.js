const Joi = require("joi");

const loginValidate = Joi.object({
  email: Joi.string().required().messages({
    "string.empty": "Email is required",
    "any.required": "Email is required.",
  }),
  password: Joi.string().min(6).max(16).required().messages({
    "string.empty": "Password is required",
    "any.required": "Password is required.",
    "string.min": "Password must have a minimum of 6 character.",
    "string.max": "Password must have a maximum of 16 character.",
  }),
});

module.exports = loginValidate;

import Joi from "joi";

const registerValidation = Joi.object({
  fullname: Joi.string().required().messages({
    "string.empty": "Fullname field is empty.",
    "string.required": "Fullname field is empty.",
  }),

  email: Joi.string().required().messages({
    "string.empty": "Email field is empty.",
    "string.required": "Email field is empty.",
  }),

  password: Joi.string().required().min(6).max(16).messages({
    "string.empty": "Password field is empty.",
    "string.required": "Password field is empty.",
  }),
});

export default registerValidation;

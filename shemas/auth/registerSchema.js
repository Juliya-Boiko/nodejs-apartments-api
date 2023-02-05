const Joi = require('joi');

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  // Minimum eight characters, at least one letter and one number
});

module.exports = registerSchema;
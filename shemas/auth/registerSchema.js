const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().alphanum().min(2).trim().required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(6).max(10).trim().pattern(/^[a-zA-Z0-9]{3,30}$/).required()
});

module.exports = registerSchema;
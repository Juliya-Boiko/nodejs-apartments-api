const Joi = require('joi');

const addOrderSchema = Joi.object({
  apartmentId: Joi.string().required(),
});

module.exports = addOrderSchema;
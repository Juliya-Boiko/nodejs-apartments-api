const Joi = require('joi');

const reviewSchema = Joi.object({
  author: Joi.string().required(),
  content: Joi.string().required(),
  rating: Joi.number().required()
});

module.exports = reviewSchema;
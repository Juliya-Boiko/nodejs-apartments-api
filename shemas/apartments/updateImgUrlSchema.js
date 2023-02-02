const Joi = require('joi');

const updateImgUrlSchema = Joi.object({
  imgUrl: Joi.string().required(),
});

module.exports = updateImgUrlSchema;
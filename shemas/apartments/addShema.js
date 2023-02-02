const Joi = require('joi');

const addSchema = Joi.object({
  title: Joi.string().required(),
  descr: Joi.string().required(),
  rating: Joi.number().default(0),
  price: Joi.number().required(),
  location: {
    city: Joi.string().required(),
  },
  owner: {
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
  },
  imgUrl: Joi.string().default(''),
});

module.exports = addSchema;
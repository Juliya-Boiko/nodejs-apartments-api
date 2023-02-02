const apartmentsOperations = require('../../models/apartments');
const addSchema = require('../../shemas/apartments/addShema');
const RequestError = require('../../helpers');

const addNew = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw RequestError(400, error.message);
  }
  const result = await apartmentsOperations.addApartment(req.body);
  res.status(201).json(result);
}

module.exports = addNew;
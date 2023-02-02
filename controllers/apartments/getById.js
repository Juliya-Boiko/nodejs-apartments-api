const apartmentsOperations = require('../../models/apartments');
const RequestError = require('../../helpers');

const getById = async (req, res) => {
  const { apartmentId } = req.params;
  const result = await apartmentsOperations.getApartmentById(apartmentId);
  if (!result) {
    throw RequestError(404, `No apartment with id ${apartmentId}`);
  }
  res.json(result);
}

module.exports = getById;
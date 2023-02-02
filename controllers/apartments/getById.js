const RequestError = require('../../helpers');
const Apartment = require('../../models/apartment');

const getById = async (req, res) => {
  const { apartmentId } = req.params;
  const result = await Apartment.findById(apartmentId);
  if (!result) {
    throw RequestError(404, `No apartment with id ${apartmentId}`);
  }
  res.json(result);
}

module.exports = getById;
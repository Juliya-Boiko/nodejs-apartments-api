const Apartment = require('../../models/apartment');
const createError = require('http-errors');

const getById = async (req, res) => {
  const { apartmentId } = req.params;
  const result = await Apartment.findById(apartmentId);
  if (!result) {
    throw createError(404, `Apartment with id=${apartmentId} not found`);
  }
  res.json(result);
}

module.exports = getById;
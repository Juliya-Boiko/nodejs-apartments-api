const Apartment = require('../../models/apartment');

const getById = async (req, res) => {
  const { apartmentId } = req.params;
  const result = await Apartment.findById(apartmentId);
  if (!result) {
    throw new Error(`Apartment with id ${apartmentId} not found`);
  }
  res.json(result);
}

module.exports = getById;
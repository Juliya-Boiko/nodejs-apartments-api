const Apartment = require('../../models/apartment');
const createError = require('http-errors');

const deleteById = async (req, res) => {
  const { apartmentId } = req.params;
  const result = await Apartment.findByIdAndDelete(apartmentId);
  if (!result) {
    throw createError(404, `Apartment with id=${apartmentId} not found`);
  }
  res.json({
    message: `Apartment with id ${apartmentId} deleted succesfully`
  });
}

module.exports = deleteById;
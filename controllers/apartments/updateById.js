const Apartment = require('../../models/apartment');
const createError = require('http-errors');

const updateById = async (req, res) => {
  const { apartmentId } = req.params;
  const result = await Apartment.findByIdAndUpdate(apartmentId, req.body, { new: true });
  if (!result) {
    throw createError(404, `Cannot update apartment with id=${apartmentId}`);
  }
  res.status(201).json(result);
}

module.exports = updateById;
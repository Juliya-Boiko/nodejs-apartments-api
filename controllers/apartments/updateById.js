const addSchema = require('../../shemas/apartments/addShema');
const RequestError = require('../../helpers');
const Apartment = require('../../models/apartment');

const updateById = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw RequestError(400, error.message);
  }
  const { apartmentId } = req.params;
  const result = await Apartment.findByIdAndUpdate(apartmentId, req.body, { new: true });
  if (!result) {
    throw RequestError(404, `No apartmentId with id ${apartmentId}`);
  }
  res.status(201).json(result);
}

module.exports = updateById;
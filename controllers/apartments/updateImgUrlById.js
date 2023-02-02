const RequestError = require('../../helpers');
const Apartment = require('../../models/apartment');

const updateImgUrlById = async (req, res) => {
  const { apartmentId } = req.params;
  const result = await Apartment.findByIdAndUpdate(apartmentId, req.body, { new: true });
  if (!result) {
    throw RequestError(404, `No apartmentId with id ${apartmentId}`);
  }
  res.status(201).json(result);
};

module.exports = updateImgUrlById;
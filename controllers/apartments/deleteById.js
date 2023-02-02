const apartmentsOperations = require('../../models/apartments');
const RequestError = require('../../helpers');

const deleteById = async (req, res) => {
  const { apartmentId } = req.params;
  const result = apartmentsOperations.removeApartment(apartmentId);
  if (!result) {
    throw RequestError(404, `No apartmentId with id ${apartmentId}`);
  }
  res.json({
    message: `Apartment with id ${apartmentId} deleted succesfully`
  });
}

module.exports = deleteById;
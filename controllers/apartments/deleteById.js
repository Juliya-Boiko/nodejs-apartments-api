const RequestError = require('../../helpers');
const Apartment = require('../../models/apartment');

const deleteById = async (req, res) => {
  const { apartmentId } = req.params;
  console.log(apartmentId);
  const result = Apartment.findByIdAndDelete(apartmentId);
  if (!result) {
    throw RequestError(404, `No apartmentId with id ${apartmentId}`);
  }
  res.json({
    message: `Apartment with id ${apartmentId} deleted succesfully`
  });
}

module.exports = deleteById;
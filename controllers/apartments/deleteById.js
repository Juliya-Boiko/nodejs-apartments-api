const Apartment = require('../../models/apartment');

const deleteById = async (req, res) => {
  const { apartmentId } = req.params;
  const result = await Apartment.findByIdAndDelete(apartmentId);
  if (!result) {
    throw new Error(`No apartmentId with id ${apartmentId}`);
  }
  res.json({
    message: `Apartment with id ${apartmentId} deleted succesfully`
  });
}

module.exports = deleteById;
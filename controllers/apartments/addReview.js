const RequestError = require('../../helpers');
const Apartment = require('../../models/apartment');

const addReview = async (req, res) => {
  const { apartmentId } = req.params;
  const newReview = req.body;
  const result = await Apartment.findById(apartmentId);
  if (!result) {
    throw RequestError(404, `No apartmentId with id ${apartmentId}`);
  }
  await Apartment.findByIdAndUpdate(apartmentId, {$push: {reviews: newReview}}, {upsert: true})
  res.status(201).json({
    message: `Apertment ${apartmentId} reviews updated`
  });
};

module.exports = addReview;
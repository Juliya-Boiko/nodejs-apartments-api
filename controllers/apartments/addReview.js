const Apartment = require('../../models/apartment');
const createError = require('http-errors');

const addReview = async (req, res) => {
  const { apartmentId } = req.params;
  const newReview = req.body;
  const result = await Apartment.findById(apartmentId);
  if (!result) {
    throw createError(404, `Apartment with id=${apartmentId} not found`);
  }
  await Apartment.findByIdAndUpdate(apartmentId, {$push: {reviews: newReview}}, {upsert: true})
  res.status(201).json({
    message: `Apertment ${apartmentId} reviews updated`
  });
};

module.exports = addReview;
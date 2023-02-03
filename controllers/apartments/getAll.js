const Apartment = require('../../models/apartment');

const getAll = async (req, res) => {
  const { city, price } = req.query;
  if (!city && !price) {
    const result = await Apartment.find({});
    res.json(result);
  }
  if (!city && price) {
    const result = await Apartment.find({ price: { $gte: price} });
    res.json(result);
  }
  if (city && !price) {
    const result = await Apartment.find({ location: { city: city } });
    res.json(result);
  }
  else {
    const result = await Apartment.find({ location: { city: city }, price: { $gte: price} });
    res.json(result);
  }
};

module.exports = getAll;
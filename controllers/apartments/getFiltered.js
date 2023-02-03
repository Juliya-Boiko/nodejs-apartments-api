const Apartment = require('../../models/apartment');

const getFiltered = async (req, res) => {
  const { city = "", price = 0 } = req.query;
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

module.exports = getFiltered;
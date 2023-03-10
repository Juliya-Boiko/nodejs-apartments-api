const Apartment = require('../../models/apartment');
const { getCities } = require('../../helpers');

const getAllCities = async (req, res) => {
  const result = await Apartment.find({});
  const cities = getCities(result);
  res.json(cities);
};

module.exports = { getAllCities };
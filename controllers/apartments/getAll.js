const Apartment = require('../../models/apartment');

const getAll = async (req, res) => {
  const result = await Apartment.find({});
  res.json(result);
};

module.exports = getAll;
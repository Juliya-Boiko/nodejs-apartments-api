const apartmentsOperations = require('../../models/apartments')

const getAll = async (req, res) => {
  const result = await apartmentsOperations.apartmentsList();
  res.json(result);
};

module.exports = getAll;
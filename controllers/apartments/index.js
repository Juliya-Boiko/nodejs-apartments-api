const getAll = require('./getAll');
const getByID = require('./getById');
const addNew = require('./addNew');
const deleteById = require('./deleteById');
const updateById = require('./updateById');
const updateImgUrlById = require('./updateImgUrlById');
const getCitiesList = require('./getCitiesList');
const addReview = require('./addReview');

module.exports = {
  getAll,
  getByID,
  addNew,
  deleteById,
  updateById,
  updateImgUrlById,
  getCitiesList,
  addReview
};
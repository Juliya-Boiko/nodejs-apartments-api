const getAll = require('./getAll');
const getByID = require('./getById');
const addNew = require('./addNew');
const deleteById = require('./deleteById');
const updateById = require('./updateById');
const updateImgUrlById = require('./updateImgUrlById');
const getCitiesList = require('./getCitiesList');
const addReview = require('./addReview');
const getFiltered = require('./getFiltered');

module.exports = {
  getAll,
  getFiltered,
  getByID,
  addNew,
  deleteById,
  updateById,
  updateImgUrlById,
  getCitiesList,
  addReview
};
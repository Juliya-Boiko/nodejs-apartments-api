const express = require('express');
const citiesRouter = express.Router();
const { controllerWrapper } = require('../../helpers');
const { getAllCities } = require('../../controllers/cities/getAllCities');

citiesRouter.get('/', controllerWrapper(getAllCities));

module.exports = citiesRouter;

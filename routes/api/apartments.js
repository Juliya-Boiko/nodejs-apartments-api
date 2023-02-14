const express = require('express');
const apartmentsRouter = express.Router();
const { controllerWrapper } = require('../../helpers');
const { getAllApartments, getApartmentById } = require('../../controllers/apartments');

apartmentsRouter.get('/', controllerWrapper(getAllApartments));
apartmentsRouter.get('/:apartmentId', controllerWrapper(getApartmentById));

module.exports = apartmentsRouter;
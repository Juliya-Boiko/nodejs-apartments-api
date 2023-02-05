const express = require('express');
const apartmentsRouter = express.Router();
const schemas = require('../../shemas/apartments');
const apartmentsControllers = require('../../controllers/apartments');
const { controllerWrapper } = require('../../helpers');
const { validateBody, authenticate, upload } = require('../../middlewares');

apartmentsRouter.get('/', authenticate, controllerWrapper(apartmentsControllers.getAll));
// IF FILTERS TRUE --> `?city=${}&price=${}` & getFiltered--controller

apartmentsRouter.get('/cities', authenticate, controllerWrapper(apartmentsControllers.getCitiesList));

apartmentsRouter.get('/:apartmentId', authenticate, controllerWrapper(apartmentsControllers.getByID));

apartmentsRouter.post('/', authenticate, validateBody(schemas.addSchema), controllerWrapper(apartmentsControllers.addNew));

apartmentsRouter.put('/:apartmentId', authenticate, validateBody(schemas.addSchema), controllerWrapper(apartmentsControllers.updateById));

apartmentsRouter.patch('/:apartmentId/imgUrl', authenticate, upload.single('cover'), controllerWrapper(apartmentsControllers.updateImgUrlById));

apartmentsRouter.put('/:apartmentId/reviews', authenticate, validateBody(schemas.reviewSchema), controllerWrapper(apartmentsControllers.addReview));

apartmentsRouter.delete('/:apartmentId', authenticate, controllerWrapper(apartmentsControllers.deleteById));

module.exports = apartmentsRouter;
const express = require('express');
const apartmentsRouter = express.Router();
const schemas = require('../../shemas/apartments');
const apartmentsControllers = require('../../controllers/apartments');
const { controllerWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');

apartmentsRouter.get('/', authenticate, controllerWrapper(apartmentsControllers.getAll));

apartmentsRouter.get('/:apartmentId', authenticate, controllerWrapper(apartmentsControllers.getByID));

apartmentsRouter.post('/', authenticate, validateBody(schemas.addSchema), controllerWrapper(apartmentsControllers.addNew));

apartmentsRouter.put('/:apartmentId', authenticate, validateBody(schemas.addSchema), controllerWrapper(apartmentsControllers.updateById));

apartmentsRouter.patch('/:apartmentId/imgUrl', authenticate, validateBody(schemas.updateImgUrlSchema), controllerWrapper(apartmentsControllers.updateImgUrlById));

apartmentsRouter.delete('/:apartmentId', authenticate, controllerWrapper(apartmentsControllers.deleteById));

module.exports = apartmentsRouter;
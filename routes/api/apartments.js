const express = require('express');
const apartmentsRouter = express.Router();
const schemas = require('../../shemas/apartments');
const apartmentsControllers = require('../../controllers/apartments');
const { controllerWrapper } = require('../../helpers');
const { validateBody } = require('../../middlewares');

apartmentsRouter.get('/', controllerWrapper(apartmentsControllers.getAll));

apartmentsRouter.get('/:apartmentId', controllerWrapper(apartmentsControllers.getByID));

apartmentsRouter.post('/', validateBody(schemas.addSchema), controllerWrapper(apartmentsControllers.addNew));

apartmentsRouter.put('/:apartmentId', validateBody(schemas.addSchema), controllerWrapper(apartmentsControllers.updateById));

apartmentsRouter.patch('/:apartmentId/imgUrl', validateBody(schemas.updateImgUrlSchema), controllerWrapper(apartmentsControllers.updateImgUrlById));

apartmentsRouter.delete('/:apartmentId', controllerWrapper(apartmentsControllers.deleteById));

module.exports = apartmentsRouter;
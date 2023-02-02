const express = require('express');
const router = express.Router();
const apartmentsControllers = require('../../controllers/apartments');
const { controllerWrapper } = require('../../helpers');
const { validateBody } = require('../../middlewares');
const schemas = require('../../shemas/apartments');

router.get('/', controllerWrapper(apartmentsControllers.getAll));

router.get('/:apartmentId', controllerWrapper(apartmentsControllers.getByID));

router.post('/', validateBody(schemas.addSchema), controllerWrapper(apartmentsControllers.addNew));

router.put('/:apartmentId', validateBody(schemas.addSchema), controllerWrapper(apartmentsControllers.updateById));

router.patch('/:apartmentId/imgUrl', validateBody(schemas.updateImgUrlSchema), controllerWrapper(apartmentsControllers.updateImgUrlById));

router.delete('/:apartmentId', controllerWrapper(apartmentsControllers.deleteById));

module.exports = router;
const express = require('express');
const router = express.Router();
const apartmentsControllers = require('../../controllers/apartments');
const { controllerWrapper } = require('../../helpers');
const { validateBody } = require('../../middlewares');
const addSchema = require('../../shemas/apartments/addShema');

router.get('/', controllerWrapper(apartmentsControllers.getAll));

router.get('/:apartmentId', controllerWrapper(apartmentsControllers.getByID));

router.post('/', validateBody(addSchema), controllerWrapper(apartmentsControllers.addNew));

router.delete('/:apartmentId', controllerWrapper(apartmentsControllers.deleteById));

router.put('/:apartmentId', validateBody(addSchema), controllerWrapper(apartmentsControllers.updateById));

module.exports = router;
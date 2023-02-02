const express = require('express');
const router = express.Router();
const apartmentsControllers = require('../../controllers/apartments');
const { controllerWrapper } = require('../../helpers');
const { validateBody } = require('../../middlewares');
const addShema = require('../../shemas/apartments/addShema');

router.get('/', controllerWrapper(apartmentsControllers.getAll));

router.get('/:apartmentId', controllerWrapper(apartmentsControllers.getByID));

router.post('/', validateBody(addShema), controllerWrapper(apartmentsControllers.addNew));

router.delete('/:apartmentId', controllerWrapper(apartmentsControllers.deleteById));

router.put('/:apartmentId', validateBody(addShema), controllerWrapper(apartmentsControllers.updateById));

module.exports = router;
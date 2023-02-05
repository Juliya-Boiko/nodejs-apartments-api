const express = require('express');
const apartmentsRouter = express.Router();
const { addSchema, reviewSchema } = require('../../shemas/apartments');
const { controllerWrapper } = require('../../helpers');
const { validateBody, authenticate, upload } = require('../../middlewares');
const { getAll, getCitiesList, getByID, addNew, updateById, updateImgUrlById, addReview, deleteById } = require('../../controllers/apartments');

apartmentsRouter.get('/', authenticate, controllerWrapper(getAll));

apartmentsRouter.get('/cities', authenticate, controllerWrapper(getCitiesList));

apartmentsRouter.get('/:apartmentId', authenticate, controllerWrapper(getByID));

apartmentsRouter.post('/', authenticate, validateBody(addSchema), controllerWrapper(addNew));

apartmentsRouter.put('/:apartmentId', authenticate, validateBody(addSchema), controllerWrapper(updateById));

apartmentsRouter.patch('/:apartmentId/imgUrl', authenticate, upload.single('cover'), controllerWrapper(updateImgUrlById));

apartmentsRouter.put('/:apartmentId/reviews', authenticate, validateBody(reviewSchema), controllerWrapper(addReview));

apartmentsRouter.delete('/:apartmentId', authenticate, controllerWrapper(deleteById));

module.exports = apartmentsRouter;
const express = require('express');
const ordersRouter = express.Router();
const { controllerWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const { addOrderSchema } = require('../../shemas/orders');
const { getAllOrders, addNewOrder, deleteOrderById } = require('../../controllers/orders');

ordersRouter.get('/', authenticate, controllerWrapper(getAllOrders));

ordersRouter.post('/', validateBody(addOrderSchema), authenticate, controllerWrapper(addNewOrder))

ordersRouter.delete('/:orderId', authenticate, controllerWrapper(deleteOrderById));

module.exports = ordersRouter;

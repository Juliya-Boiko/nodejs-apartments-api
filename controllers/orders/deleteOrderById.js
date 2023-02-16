const Order = require('../../models/order');
const createError = require('http-errors');

const deleteOrderById = async (req, res) => {
  const { orderId } = req.params
  const { _id } = req.user;

  const result = await Order.findOne({ ownerId: _id });
  if (!result) {
    throw createError(404, `Orders from user with id=${_id} not found`);
  } else {
    const updatedOrder = await Order.findByIdAndUpdate(result._id, { items: [ ...result.items.filter(item => item !== orderId)] }, { new: true })
    res.json(updatedOrder);
  }
};

module.exports = deleteOrderById;
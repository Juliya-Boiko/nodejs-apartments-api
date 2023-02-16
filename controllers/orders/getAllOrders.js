const Order = require('../../models/order');

const getAllOrders = async (req, res) => {
  const { _id } = req.user;
  const result = await Order.findOne({ ownerId: _id });
  res.json(result);
};

module.exports = getAllOrders;
const Order = require('../../models/order');
// const createError = require('http-errors');

const addNewOrder = async (req, res) => {
  const { _id } = req.user;

  const result = await Order.findOne({ ownerId: _id });
  if (!result) {
    const newOrder = await Order.create({
      ownerId: _id,
      items: [req.body.apartmentId]
    });
    res.json(newOrder);
  } else {
    const existedOrder = await Order.findByIdAndUpdate(result._id, { items: [...result.items, req.body.apartmentId] }, { new: true })
    res.json(existedOrder);
  }
};

module.exports = addNewOrder;
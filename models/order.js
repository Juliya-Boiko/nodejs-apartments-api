const { Schema, model } = require('mongoose');
const { handleErrors } = require('../helpers');

const orderSchema = Schema({
  ownerId: {
    type: String,
    requid: [true, 'UserID is required'],
  },
  items: {
    type: Array,
    default: [String]
  }
}, { versionKey: false, timestamps: true });

orderSchema.post("save", handleErrors);

const Order = model('order', orderSchema);

module.exports = Order;
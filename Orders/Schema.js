const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  itemId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Integer,
    required: true,
  },
  tableNumber: {
    type: Integer,
    required: true,
  },
  waiterId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('orders', OrderSchema);

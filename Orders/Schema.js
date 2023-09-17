const mongoose = require('mongoose');

export const ItemsSchema = new mongoose.Schema({
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

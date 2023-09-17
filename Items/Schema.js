const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('items', ItemsSchema);

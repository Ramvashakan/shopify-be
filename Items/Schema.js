const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema({
  rate: {
    type: Float,
    required: true,
  },
});

module.exports = mongoose.model('items', ItemsSchema);

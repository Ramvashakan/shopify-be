const mongoose = require('mongoose');

export const ItemsSchema = new mongoose.Schema({
  rate: {
    type: Float,
    required: true,
  },
});

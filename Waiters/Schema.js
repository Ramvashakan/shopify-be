const mongoose = require('mongoose');

export const ItemsSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
});

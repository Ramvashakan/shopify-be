const mongoose = require('mongoose');

const WaiterSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('waiters', WaiterSchema);

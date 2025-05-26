const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  logo: String
});

module.exports = mongoose.model('Item', itemSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Vehicle = new Schema({
  type: String,
  make: String,
  model: String,
  license: String,
  imgUrl: String
});

module.exports = { Vehicle };

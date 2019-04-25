var mongoose = require("mongoose");
const { VehicleModel } = require("../../mongo/models");

// 1. create a function called getAll that returns everything
const list = () => {
  return VehicleModel.find({});
};

// 2. create a function called createMovie that accepts a "movie" param
const create = movie => {
  return VehicleModel.create(movie);
};

// 3. create a function called deleteMovie that accepts a "movieName" param
const remove = movieName => {
  return VehicleModel.deleteOne({ movieName });
};

// 4. create a function called getById that accepts an "id" param and finds one ticket
// hint: in your db query, you will use objectId like this: ObjectId(id)
const show = id => {
  return VehicleModel.findById();
};

module.exports = { getAll, createMovie, deleteMovie, getById };

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { VehicleModel } = require("../../mongo/models");

const list = () => {
  return VehicleModel.find({});
};

const create = vehicle => {
  return VehicleModel.create(vehicle);
};

const remove = id => {
  return VehicleModel.deleteOne(ObjectId(id));
};

const show = id => {
  return VehicleModel.findById(ObjectId(id));
};

module.exports = { list, create, remove, show };

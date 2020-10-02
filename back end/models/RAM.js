const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RAMSchema = new Schema({
  Item_name: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  price: {
    type: String,
  },
  voltage: {
    type: String,
  },
  Speed: {
    type: Number,
  },
  Modules: {
    type: String,
  },
  Link: {
    type: String,
  },
});

module.exports = RAM = mongoose.model("ram", RAMSchema, "ram");

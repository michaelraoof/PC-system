const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const GPUSchema = new Schema({
  gpu_name: {
    type: String,
  },
  architecture: {
    type: String,
  },
  process_size: {
    type: String,
  },
  transistors: {
    type: String,
  },
  generation: {
    type: String,
  },
  bus_interface: {
    type: String,
  },
  base_clock: {
    type: String,
  },
  boost_clock: {
    type: String,
  },
  memory_clock: {
    type: String,
  },
  memory_size: {
    type: String,
  },
  memory_type: {
    type: String,
  },
  TDP: {
    type: String,
  },
  outputs: {
    type: String,
  },
  release_date: {
    type: String,
  },
  Launch_Price: {
    type: String,
  },
  Link: {
    type: String,
  },
});

module.exports = GPU = mongoose.model("gpu1", GPUSchema);

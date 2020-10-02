const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StorageSchema = new Schema({
  Manufacturer: {
    type: String,
  },
  Model: {
    type: String,
  },
  Capacity: {
    type: String,
  },
  Nvme: {
    type: String,
  },
  Interface: {
    type: String,
  },
  Type: {
    type: String,
  },

  Form_factor: {
    type: String,
  },
  Price: {
    type: String,
  },
  Link: {
    type: String,
  },
});

module.exports = Storage = mongoose.model("storage", StorageSchema, "storage");

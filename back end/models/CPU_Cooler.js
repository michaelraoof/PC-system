const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CPUCoolerSchema = new Schema({
  Manufacturer: {
    type: String,
    //required: true,
  },
  Model: {
    type: String,
  },
  Fan_RPM: {
    type: String,
  },
  Noise_level: {
    type: String,
  },

  Water_cooled: {
    type: String,
  },
  Price: {
    type: String,
  },
  Link: {
    type: String,
  },
});

module.exports = CPU_Cooler = mongoose.model("cpucooler", CPUCoolerSchema, "cpucooler");

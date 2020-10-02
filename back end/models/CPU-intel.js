const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CPUSchema = new Schema({
  cpu_name: {
    type: String,
  },
  generation: {
    type: String,
  },
  code_name: {
    type: String,
  },
  socket: {
    type: String,
  },
  process_size: { type: String },
  foundry: { type: String },
  tjmax: { type: String },
  frequency: { type: String },
  turbo_lock: { type: String },
  base_lock: { type: String },
  tdp: { type: String },

  NO_cores: { type: Number },
  NO_threads: { type: Number },
  integrated_graphics: { type: String },
  release_date: { type: String },
  memory_support: { type: String },
  Price: { type: String },
  Link: { type: String },
});

module.exports = mongoose.model("cpuintel", CPUSchema, "cpuintel");

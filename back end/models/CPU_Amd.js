const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CPUamdSchema = new Schema({
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
  turbo_clock: { type: String },
  base_clock: { type: String },
  tdp: { type: String },

  NO_cores: { type: String },
  NO_threads: { type: String },
  integrated_graphics: { type: String },
  release_date: { type: String },
  memory_support: { type: String },
  Price: { type: String },
  Link: { type: String },
});

module.exports = CPUamd = mongoose.model("cpuamd", CPUamdSchema, "cpuamd");

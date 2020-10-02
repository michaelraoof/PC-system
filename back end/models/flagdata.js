const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const flagschema = new Schema({
  ID: {
    type: Number,
  },
  Flag: {
    type: String,
  },
  Budget: {
    type: Number,
  },
  Major: {
    type: String,
  },
  Work: {
    type: String,
  },
  Gaming: {
    type: String,
  },
  FIELD7: {
    type: String,
  },
});

module.exports = flag = mongoose.model("flagsdata", flagschema, "flagsdata");

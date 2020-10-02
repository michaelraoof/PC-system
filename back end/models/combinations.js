const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const combinationsSchema = new Schema({
  Flag: {
    type: String,
    //required: true,
  },
  Processor: {
    type: String,
  },
  Priceofprocessor: {
    type: Number,
  },
  GraphicCard: {
    type: String,
  },
  Priceofgraphiccard: {
    type: Number,
  },

  Motherboard: {
    type: String,
  },
  Priceofmotherboard: {
    type: Number,
  },
  Ram: {
    type: String,
  },
  Priceofram: {
    type: Number,
  },
  Storage: {
    type: String,
  },
  Priceofstorage: {
    type: Number,
  },

  CPUCooler: {
    type: String,
  },
  Priceofcppucooler: {
    type: Number,
  },
  PowerSupply: {
    type: String,
  },
  Priceofpwoersupply: {
    type: Number,
  },
  Total: {
    type: Number,
  },
});

module.exports = combinations = mongoose.model("combinations", combinationsSchema, "combinations");

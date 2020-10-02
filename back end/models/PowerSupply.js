const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PowerSupplySchema = new Schema({
  item_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  Manufacturer: {
    type: String,
    //required: true,
  },
  model: {
    type: String,
  },
  Efficiency_ratting: {
    type: String,
  },
  wattage: {
    type: String,
  },
  Modular: {
    type: String,
  },
  PCIe_6_2_pin_connectors: {
    type: Number,
  },
  SATA_connectors: {
    type: Number,
  },
  Price: {
    type: String,
  },
  Link: {
    type: String,
  },
});

module.exports = PowerSupply = mongoose.model("powersupply", PowerSupplySchema, "powersupply");

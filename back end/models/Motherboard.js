const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MotherboardSchema = new Schema({
  name: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  Chipset: {
    type: String,
  },
  Socket_CPU: {
    type: String,
  },
  Memory_Max: {
    type: String,
  },
  Memory_Type: {
    type: String,
  },
  Memory_Slots: {
    type: Number,
  },
  Memory_Speed: {
    type: String,
  },
  SLI_CrossFire: {
    type: String,
  },
  Price: {
    type: String,
  },
  Link: {
    type: String,
  },
});

module.exports = Motherboard = mongoose.model("motherboard", MotherboardSchema, "motherboard");

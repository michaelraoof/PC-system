const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisteredUserSchema = new Schema({
  History: [
    {
      Processor: {
        type: String,
      },
      GraphicCard: {
        type: String,
      },
      Motherboard: {
        type: String,
      },
      Ram: {
        type: String,
      },
      Storage: {
        type: String,
      },
      CPUCooler: {
        type: String,
      },
      PowerSupply: {
        type: String,
      },
      Total: {
        type: String,
      },
    },
  ],

  current_compination: {
    Processor: {
      type: String,
    },
    GraphicCard: {
      type: String,
    },
    Motherboard: {
      type: String,
    },
    Ram: {
      type: String,
    },
    Storage: {
      type: String,
    },
    CPUCooler: {
      type: String,
    },
    PowerSupply: {
      type: String,
    },
    Total: {
      type: String,
    },
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

exports.RegisteredUser = mongoose.model("registeredUsers", RegisteredUserSchema);

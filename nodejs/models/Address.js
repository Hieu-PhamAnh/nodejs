const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Address = new Schema(
  {
    name: { type: String },
    address: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", Address);

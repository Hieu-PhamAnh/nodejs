const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Role = new Schema(
  {
    name: { type: String },
    description: { type: String },
    permission: { type: [String] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Role", Role);

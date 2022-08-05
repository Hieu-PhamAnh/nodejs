const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    password: { type: String, min: 8 },
    address: { type: Object },
    role: { type: [String] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);

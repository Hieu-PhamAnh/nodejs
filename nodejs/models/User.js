const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    password: { type: String, min: 8 },
    address: [{ type: Object }],
    role: [{ type: { _id: Schema.Types.ObjectId, name: String } }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

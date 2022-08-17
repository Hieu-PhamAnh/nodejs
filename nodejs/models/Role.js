const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roleSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    permission: [{ type: Schema.Types.ObjectId, ref: "Permission" }],
  },
  {
    timestamps: true,
  }
);
const Role = mongoose.model("Role", roleSchema);
module.exports = Role;

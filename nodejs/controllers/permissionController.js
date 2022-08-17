const Permission = require("../models/Permission");
const PermissionController = {
  handleCreate: async (req, res) => {
    try {
      const newPermission = await Permission.create(req.body);
      await newPermission.save();
      return res.status(200).json(newPermission);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Loi",
      });
    }
  },
  handleGet: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Permission.findById(id);
      return res.status(200).json({
        message: "thanh cong",
        id: id,
        user: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "loi",
      });
    }
  },
  handleUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Permission.findByIdAndUpdate(id, req.body);
      return res.status(200).json({
        message: "thanh cong",
        id: id,
        user: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "loi",
      });
    }
  },
  handleDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Permission.findByIdAndDelete(id);
      return res.status(200).json({
        message: "thanh cong",
        id: id,
        user: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "loi",
      });
    }
  },
};
module.exports = PermissionController;

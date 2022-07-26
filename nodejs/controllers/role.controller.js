const Role = require("../models/Role");
const RoleController = {
  handleCreate: async (req, res) => {
    try {
      const newRole = await Role.create(req.body);
      return res.status(200).json(newRole);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Loi",
      });
    }
  },
  handleGet: async (req, res) => {
    try {
      const { id } = req.params;
      // console.log(req.query);
      const data = await Role.findById(id);
      return res.status(200).json({
        message: "thanh cong",
        id: id,
        role: data,
        param: req.params,
        query: req.query,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "loi",
      });
    }
  },
  handleUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Role.findByIdAndUpdate(id, req.body);
      return res.status(200).json({
        message: "thanh cong",
        id: id,
        user: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "loi",
      });
    }
  },
  handleDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Role.findByIdAndDelete(id);
      return res.status(200).json({
        message: "thanh cong",
        id: id,
        user: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "loi",
      });
    }
  },
};
module.exports = RoleController;

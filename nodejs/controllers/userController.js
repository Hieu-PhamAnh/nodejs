// const handleCreate = async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     await newUser.save();
//     return res.status(200).json(newUser);
//   } catch (error) {
//     return res.status(422).json({
//       message: "Loi",
//     });
//   }
// };
const User = require("../models/User");
const UserController = {
  handleCreate: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      await newUser.save();
      return res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(422).json({
        message: "Loi",
      });
    }
  },
  handleGet: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findById(id);
      return res.status(200).json({
        message: "thanh cong",
        id: id,
        user: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({
        message: "loi",
      });
    }
  },
  handleUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findByIdAndUpdate(id, req.body);
      return res.status(200).json({
        message: "thanh cong",
        id: id,
        user: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({
        message: "loi",
      });
    }
  },
  handleDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findByIdAndDelete(id);
      return res.status(200).json({
        message: "thanh cong",
        id: id,
        user: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({
        message: "loi",
      });
    }
  },
};
module.exports = UserController;

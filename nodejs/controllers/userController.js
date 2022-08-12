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
      //await newUser.save();
      return res.status(200).json(newUser);
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
      const data = await User.findById(id);
      if (data) {
        return res.status(200).json({
          message: "thanh cong",
          id: id,
          user: data,
        });
      } else {
        return res.status(404).json({
          message: "khong tim thay",
        });
      }
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
      const data = await User.findByIdAndUpdate(id, req.body);
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
      const data = await User.findByIdAndDelete(id);
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
  handleLogin: async (req, res) => {
    try {
      const { logEmail, logPassword } = req.body;
      const user = await User.find({ email: logEmail });
      if (user.password != logPassword) {
        return res.status(401).json({
          message: "sai mat khau",
        });
      }
      return res.status(200).json({
        message: "dang nhap thanh cong",
        data: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "loi",
      });
    }
  },
  handleAgg: async (req, res) => {
    try {
      User.aggregate({ age: { $gt: 19 } }).then((data) => {
        console.log(data);
      });
      // User.find({ age: { $gt: 19 } }).then((data) => {
      //   console.log(data);
      // });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "loi",
      });
    }
  },
};
module.exports = UserController;

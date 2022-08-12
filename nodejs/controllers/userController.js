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
          message: "nguoi dung khong ton tai",
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
      if (data) {
        return res.status(200).json({
          message: "sua thanh cong",
          id: id,
          user: data,
        });
      } else {
        return res.status(404).json({
          message: "nguoi dung khong ton tai",
        });
      }
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
      if (data) {
        return res.status(200).json({
          message: "xoa thanh cong",
          id: id,
          user: data,
        });
      } else {
        return res.status(404).json({
          message: "nguoi dung khong ton tai",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "loi",
      });
    }
  },
  handleLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      const user = await User.findOne({ email: email });
      console.log(user);
      if (!user) {
        return res.status(404).json({
          message: " tai khoan khong ton tai",
        });
      }
      if (user.password != password) {
        return res.status(401).json({
          message: "sai mat khau",
        });
      }
      return res.status(200).json({
        message: "dang nhap thanh cong",
        //data: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "loi",
      });
    }
  },
  handleSeachAgeAddress: async (req, res) => {
    const [page, skip] = [0, 10];
    const pipeline = [
      {
        $match: {
          age: {
            $gt: 20,
          },
          // "address.name": "Ha Dong",
        },
      },
      {
        $project: {
          name: 1,
          age: 1,
          address: 1,
        },
      },
      {
        $sort: {
          age: 1,
        },
      },
    ];
    try {
      const data = await User.aggregate(pipeline);
      console.log(data.length);
      return res.status(200).json({
        tong_so_document: data.length,
        data: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "loi",
      });
    }
  },
};
module.exports = UserController;

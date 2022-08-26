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
const Token = require("../models/Token");
const jwt = require("jsonwebtoken");
const UserController = {
  handleCreate: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      return res.status(200).json(newUser);
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
      // console.log(req.params);
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
      return res.status(500).json({
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
      return res.status(500).json({
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
      return res.status(500).json({
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
      const accessToken = jwt.sign(
        { _id: user._id },
        process.env.SECRET_KEY_ACCESS,
        { expiresIn: parseInt(process.env.ACCESS_TOKEN_EXPIRE || 10) * 60 }
      );
      const refreshToken = jwt.sign(
        { _id: user._id },
        process.env.SECRET_KEY_REFRESH,
        { expiresIn: parseInt(process.env.REFRESH_TOKEN_EXPIRE || 10) * 90 }
      );
      const newToken = await Token.create({
        userID: user._id,
        token: refreshToken,
      });
      return res.status(200).json({
        message: "dang nhap thanh cong",
        accessToken: accessToken,
        refreshToken: refreshToken,
        //data: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "loi",
      });
    }
  },
  handleQueryAgeAddress: async (req, res) => {
    const [page, lim] = [0, 10];
    // const { page, lim } = req.params;
    console.log(req.params);
    const pipeline2 = [
      {
        $match: {
          age: {
            $gt: 20,
          },
          "address.name": "Ha Dong",
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
      {
        $skip: page * lim,
      },
      {
        $limit: lim,
      },
    ];
    try {
      const data = await User.aggregate(pipeline2);
      return res.status(200).json({
        tong_so_document: data.length,
        data: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "loi",
      });
    }
  },
  handleGetAllAtt: async (req, res) => {
    const [page, lim] = [0, 10];
    const pipeline = [
      {
        $lookup: {
          from: "roles",
          localField: "role._id",
          foreignField: "_id",
          as: "roleList",
        },
      },
      {
        $lookup: {
          from: "permissions",
          localField: "roleList.permission",
          foreignField: "_id",
          as: "permissionList",
        },
      },
      {
        $project: {
          _id: 0,
          name: 1,
          age: 1,
          email: 1,
          // roleList: 1,
          // perList: 1,
          "roleList.name": 1,
          "roleList.description": 1,
          "roleList.permission": 1,
          "permissionList.name": 1,
          "permissionList.description": 1,
          "permissionList.permission": 1,
        },
      },
      {
        $skip: page * lim,
      },
      {
        $limit: lim,
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
      return res.status(500).json({
        message: "loi",
      });
    }
  },
  handleSearch: async (req, res) => {
    const [page, lim] = [0, 10];
    const { name, age, email } = req.body;
    let condition = {};
    if (name !== "") {
      condition.name = name;
    }
    if (age > 0) {
      condition.age = age;
    }
    if (email !== "") {
      condition.email = email;
    }
    // console.log(condition);
    const pipeline = [
      { $match: condition },
      {
        $project: {
          name: 1,
          age: 1,
          email: 1,
        },
      },
      {
        $sort: {
          age: 1,
        },
      },
      {
        $skip: page * lim,
      },
      {
        $limit: lim,
      },
    ];
    try {
      const data = await User.aggregate(pipeline);
      if (data.length == 0) {
        return res.status(404).json({
          message: "Khong tim thay user",
        });
      }
      return res.status(200).json({
        tong_so_document: data.length,
        data: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "loi",
      });
    }
  },
  refreshToken: (req, res) => {
    const { refreshToken } = req.body;
    try {
      jwt.verify(
        refreshToken,
        process.env.SECRET_KEY_REFRESH,
        (err, payload) => {
          if (err) {
            res.status(403).json({
              message: "token khong hop le",
              err: err,
            });
          }
          console.log(payload);
        }
      );
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  },
};
module.exports = UserController;

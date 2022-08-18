const Role = require("../models/Role");
const Permission = require("../models/Permission");
const roleMiddleware = {
  checkRequired: async (req, res, next) => {
    const { name, description, permission } = req.body;
    if (!name || !description) {
      return res.status(400).json({
        message: "dien thieu thong tin, vui long nhap day du",
      });
    }
    // if (permission.length() == 0) {
    //   return res.status(400).json({
    //     message: "role thieu permission",
    //   });
    // }
    next();
  },
  checkExist: async (req, res, next) => {
    const { name, permission } = req.body;
    const role = await Role.findOne({ name: name });
    if (role) {
      return res.status(400).json({
        message: "role da ton tai",
      });
    }
    permission.array.forEach((element) => async () => {
      let permission = await Permission.findOne({ _id: element });
      if (!permission) {
        return res.status(400).json({
          message: "permission khong ton tai",
        });
      }
    });
    next();
  },
};
module.exports = roleMiddleware;

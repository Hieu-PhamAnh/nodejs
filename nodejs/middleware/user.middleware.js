const User = require("../models/User");
const validate = require("../helper/validation");
const userMiddleware = {
  checkRequired: async (req, res, next) => {
    const { name, age, email, password } = req.body;
    if (!name || !age || !email || !password) {
      return res.status(400).json({
        message: "dien thieu thong tin, vui long nhap day du",
      });
    }
    if (age <= 0) {
      return res.status(400).json({
        message: "vui long nhap tuoi hop le",
      });
    }
    next();
  },
  checkRequiredLogin: async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "dien thieu thong tin, vui long nhap day du",
      });
    }
    next();
  },
  checkValid: async (req, res, next) => {
    const { email, password } = req.body;
    if (!validate.isValidEmail(email)) {
      return res.status(400).json({
        message: "email khong hop le",
      });
    }
    if (!validate.isValidPassword(password)) {
      return res.status(400).json({
        message: "password khong hop le",
      });
    }
    next();
  },
  checkExist: async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    // console.log(user);
    if (user) {
      return res.status(400).json({
        message: "email duoc su dung",
      });
    }
    next();
  },
};
module.exports = userMiddleware;

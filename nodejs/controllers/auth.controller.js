const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    console.log(refreshToken);
  } catch (error) {
    return res.status(401).json({
      message: "token khong hop le",
      error: error,
    });
  }
};

module.exports = { refreshToken };

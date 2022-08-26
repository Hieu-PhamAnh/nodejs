const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

const refreshToken = (req, res) => {
  const { refreshToken } = req.body;
  try {
    jwt.verify(refreshToken, process.env.SECRET_KEY_REFRESH, (err, payload) => {
      if (err) {
        res.status(403).json({
          message: "token khong hop le",
          err: err,
        });
      }
      console.log(payload);
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = { refreshToken };

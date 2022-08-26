const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

const refreshToken = (req, res) => {
  const { refreshToken } = req.body;
  try {
    jwt.verify(
      refreshToken,
      process.env.SECRET_KEY_REFRESH,
      async (err, payload) => {
        if (err) {
          res.status(403).json({
            message: "token khong hop le",
            err: err,
          });
        }
        const id = payload._id;
        const accessTK = jwt.sign({ _id: id }, process.env.SECRET_KEY_ACCESS, {
          expiresIn: parseInt(process.env.ACCESS_TOKEN_EXPIRE || 10) * 60,
        });
        const refreshTK = jwt.sign(
          { _id: id },
          process.env.SECRET_KEY_REFRESH,
          {
            expiresIn: parseInt(process.env.REFRESH_TOKEN_EXPIRE || 10) * 90,
          }
        );
        const token = await Token.findOneAndUpdate(
          { userID: id },
          { token: refreshTK }
        );
        return res.status(200).json({
          message: "refresh thanh cong",
          accessToken: accessTK,
          refreshToken: refreshTK,
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = { refreshToken };

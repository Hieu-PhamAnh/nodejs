const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    const response = await jwt.verify(
      refreshToken,
      process.env.SECRET_KEY_REFRESH
      // async (err, payload) => {
      //   if (err) {
      //     res.status(401).json({
      //       message: "token khong hop le",
      //       err: err,
      //     });
      //   }
      //   const id = payload._id;
      //   const accessTK = jwt.sign({ _id: id }, process.env.SECRET_KEY_ACCESS, {
      //     expiresIn: parseInt(process.env.ACCESS_TOKEN_EXPIRE || 10) * 60,
      //   });
      //   const refreshTK = jwt.sign(
      //     { _id: id },
      //     process.env.SECRET_KEY_REFRESH,
      //     {
      //       expiresIn: parseInt(process.env.REFRESH_TOKEN_EXPIRE || 10) * 60,
      //     }
      //   );
      //   const token = await Token.findOneAndUpdate(
      //     { userID: id },
      //     { token: refreshTK }
      //   );
      //   return res.status(200).json({
      //     message: "refresh thanh cong",
      //     accessToken: accessTK,
      //     refreshToken: refreshTK,
      //   });
      // }
    );
    console.log(response);
    return res.status(200).json({
      payload: response,
    });
  } catch (error) {
    return res.status(401).json({
      message: "token khong hop le",
      error: error,
    });
  }
};

module.exports = { refreshToken };

const jwt = require("jsonwebtoken");
const { spawnToken } = require("../services/auth.service");
const authMiddleware = {
  verifiyToken: (req, res, next) => {
    const auth = req.headers.authorization;
    const accessToken = auth.split(" ")[1];
    try {
      jwt.verify(accessToken, process.env.SECRET_KEY_ACCESS);
      next();
    } catch (error) {
      return res.status(403).json({
        message: "access token khong hop le",
        error: error,
      });
    }
  },
  refreshToken: async (req, res, next) => {
    const auth = req.headers.authorization;
    const refreshToken = auth.split(" ")[1];
    try {
      const payload = await jwt.verify(
        refreshToken,
        process.env.SECRET_KEY_REFRESH
      );
      const id = payload._id;
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
      console.log(payload);
      console.log(refreshToken);
      // return res.status(200).json({
      //   payload: response,
      //   header: refreshToken,
      // });
      next();
    } catch (error) {
      return res.status(401).json({
        message: "token khong hop le",
        error: error,
      });
    }
  },
};

module.exports = authMiddleware;

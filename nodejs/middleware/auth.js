const jwt = require("jsonwebtoken");

const verifiyToken = (req, res, next) => {
  const { accessToken } = req.body;
  try {
    jwt.verify(accessToken, process.env.SECRET_KEY_ACCESS, (err, payload) => {
      if (err.name == "TokenExpiredError") {
        res.status(403).json({
          message: "token het han",
          err: err,
        });
      }
      if (err.name == "JsonWebTokenError") {
        res.status(403).json({
          message: "token khong hop le",
          err: err,
        });
      }
      req.body.payload = payload;
      console.log(payload);
      next();
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = verifiyToken;

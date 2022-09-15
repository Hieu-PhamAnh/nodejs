const User = require("../models/User");
const Token = require("../models/Token");
const jwt = require("jsonwebtoken");

const spawnToken = async (user) => {
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
  let token = { accessToken: accessToken, refreshToken: refreshToken };
  return token;
};

module.exports = { spawnToken };

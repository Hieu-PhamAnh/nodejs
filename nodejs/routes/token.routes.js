const express = require("express");
const { refreshToken } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth");
const authRouter = express.Router();

authRouter.post("/refresh-token", authMiddleware.refreshToken, refreshToken);
module.exports = authRouter;

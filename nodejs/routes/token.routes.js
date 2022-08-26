const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/refresh-token", authController.refreshToken);
module.exports = authRouter;

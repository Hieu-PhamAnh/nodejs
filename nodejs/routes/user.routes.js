const express = require("express");
const UserController = require("../controllers/user.controller");
const userMiddleware = require("../middleware/user.middleware");
const authMiddleware = require("../middleware/auth");
const userRouter = express.Router();

userRouter.post(
  "/",
  userMiddleware.checkRequired,
  userMiddleware.checkValid,
  userMiddleware.checkExist,
  UserController.handleCreate
);
userRouter.get("/:id", UserController.handleGet);
userRouter.delete(
  "/:id",
  userMiddleware.checkExist,
  UserController.handleDelete
);
userRouter.put("/:id", UserController.handleUpdate);
userRouter.post(
  "/login",
  userMiddleware.checkRequiredLogin,
  userMiddleware.checkValid,
  UserController.handleLogin
);
userRouter.post(
  "/query-age-add/",
  authMiddleware.refreshToken,
  UserController.handleQueryAgeAddress
);
userRouter.post("/query-role/", UserController.handleGetAllAtt);
userRouter.post("/query-search/", UserController.handleSearch);
userRouter.post("/refresh-token/", UserController.refreshToken);
module.exports = userRouter;

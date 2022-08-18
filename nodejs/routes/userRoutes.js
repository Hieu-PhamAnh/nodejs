const express = require("express");
const UserController = require("../controllers/user.controller");
const userMiddleware = require("../middleware/user.middleware");
const userRouter = express.Router();

userRouter.post(
  "/",
  userMiddleware.checkRequired,
  userMiddleware.checkValid,
  userMiddleware.checkExist,
  UserController.handleCreate
);
userRouter.get("/:id", UserController.handleGet);
userRouter.delete("/:id", UserController.handleDelete);
userRouter.put("/:id", UserController.handleUpdate);
userRouter.post(
  "/login",
  userMiddleware.checkRequiredLogin,
  userMiddleware.checkValid,
  UserController.handleLogin
);
userRouter.post("/query-age-add/", UserController.handleQueryAgeAddress);
userRouter.post("/query-role/", UserController.handleGetAllAtt);
userRouter.post("/query-search/", UserController.handleSearch);
module.exports = userRouter;

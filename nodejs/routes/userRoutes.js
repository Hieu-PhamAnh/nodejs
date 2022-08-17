const express = require("express");
const UserController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/", UserController.handleCreate);
userRouter.get("/:id", UserController.handleGet);
userRouter.delete("/:id", UserController.handleDelete);
userRouter.put("/:id", UserController.handleUpdate);
userRouter.post("/login", UserController.handleLogin);
userRouter.post("/query-age-add/", UserController.handleQueryAgeAddress);
userRouter.post("/query-role/", UserController.handleGetAllAtt);
userRouter.post("/query-search/", UserController.handleSearch);
module.exports = userRouter;

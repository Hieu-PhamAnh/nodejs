const express = require("express");
const UserController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/", UserController.handleCreate);
userRouter.get("/:id", UserController.handleGet);
userRouter.delete("/:id", UserController.handleDelete);
userRouter.put("/:id", UserController.handleUpdate);
userRouter.get("/login/:email", UserController.handleLogin);
userRouter.get("/query-age-add/:page", UserController.handleQueryAgeAddress);
userRouter.get("/query-role/:page", UserController.handleGetAllAtt);
module.exports = userRouter;

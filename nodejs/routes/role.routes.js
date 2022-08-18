const express = require("express");
const RoleController = require("../controllers/role.controller");
const roleMiddleware = require("../middleware/role.middleware");
const roleRouter = express.Router();

roleRouter.post(
  "/",
  roleMiddleware.checkRequired,
  roleMiddleware.checkExist,
  RoleController.handleCreate
);
roleRouter.get("/:id", RoleController.handleGet);
roleRouter.delete("/:id", RoleController.handleDelete);
roleRouter.put("/:id", RoleController.handleUpdate);

module.exports = roleRouter;

const express = require("express");
const PermissionController = require("../controllers/permission.controller");
const permissionRouter = express.Router();

permissionRouter.post("/", PermissionController.handleCreate);
permissionRouter.get("/:id", PermissionController.handleGet);
permissionRouter.delete("/:id", PermissionController.handleDelete);
permissionRouter.put("/:id", PermissionController.handleUpdate);

module.exports = permissionRouter;

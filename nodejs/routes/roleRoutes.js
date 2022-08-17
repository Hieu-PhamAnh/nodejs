const express = require("express");
const RoleController = require("../controllers/roleController");
const roleRouter = express.Router();

roleRouter.post("/", RoleController.handleCreate);
roleRouter.get("/:id", RoleController.handleGet);
roleRouter.delete("/:id", RoleController.handleDelete);
roleRouter.put("/:id", RoleController.handleUpdate);

module.exports = roleRouter;

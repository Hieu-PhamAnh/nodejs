const express = require("express");
const router = express.Router();
const userRouter = require("./userRoutes");
const roleRouter = require("./roleRoutes");
const permissionRouter = require("./permissionRoutes");

router.use("/users", userRouter);
router.use("/roles", roleRouter);
router.use("/permissions", permissionRouter);

module.exports = router;

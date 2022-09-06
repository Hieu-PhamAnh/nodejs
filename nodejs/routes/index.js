const express = require("express");
const router = express.Router();
const userRouter = require("./user.routes");
const roleRouter = require("./role.routes");
const permissionRouter = require("./permission.routes");
const tokenRouter = require("./token.routes");

router.use("/users", userRouter);
router.use("/roles", roleRouter);
router.use("/permissions", permissionRouter);
router.use("/tokens", tokenRouter);
// router.use("/search");
module.exports = router;

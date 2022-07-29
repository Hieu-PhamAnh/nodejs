const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.post("/dangmoi", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(422).json({
      message: "Loi cmnr",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findById(id);
    return res.status(200).json({
      message: "thanh cong",
      id: id,
      user: data,
    });
  } catch (error) {
    return res.status(422).json({
      message: "loi",
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await User.findByIdAndDelete(id);
  return res.status(200).json({
    message: "thanh cong",
    id: id,
    user: data,
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await User.findByIdAndUpdate(id, req.body);
  return res.status(200).json({
    message: "thanh cong",
    id: id,
    user: data,
  });
});
module.exports = router;

const mongoose = require("mongoose");
const User = require("../models/User");
User.find({ age: { $gt: 19 } }).then((data) => {
  console.log(data);
});

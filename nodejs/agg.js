const mongoose = require("mongoose");
const User = require("./models/User");
const pipeline = [
  { $project: { name: 1, age: 1, address: 1 } },
  { $match: { age: { $gte: 21 }, "address.name": "Ha Dong" } },
  { $group: { name: "$name", adrress: "$adrress", age: "$age" } },
];
const userModel = mongoose.model("use", User);
userModel
  .find(pipeline)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

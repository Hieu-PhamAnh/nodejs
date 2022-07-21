const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./controllers/routes/userRoutes");
const express = require("express");
const app = express();
const port = 3000;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://hieu:hieu123456@hieu.zjelqqh.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error.message);
  }
};
connectDB();

app.use(bodyParser.json());
app.use("/", userRoute);
// app.get("/", (req, res) => {
//   res.send("Hello World!?");
// });

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

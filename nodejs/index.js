require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");
const url = `mongodb+srv://hieu:hieu123456@hieu.zjelqqh.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(
      url
      // `mongodb+srv://hieu:hieu123456@hieu.zjelqqh.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error.message);
  }
};
connectDB();

app.use(bodyParser.json());
// app.use(express.json());
app.use("/api/v1", router);
// app.get("/", (req, res) => {
//   res.send("Hello World!?");
// });

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

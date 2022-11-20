const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/users");

// parse
app.use(express.json());

mongoose.connect(
  "mongodb+srv://mern-user-1:DBPassword1@cluster0.jlf7em7.mongodb.net/foodapp?retryWrites=true&w=majority"
);

app.get("/getUsers", function (req, res) {
  userModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async function (req, res) {
  const user = req.body;
  const newUser = new userModel(user);
  await newUser.save();
  res.json(user);
});

app.listen(3001, function (req, res) {
  console.log("Server is running on port: 3001");
});

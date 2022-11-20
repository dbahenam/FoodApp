const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const userModel = require('./models/users');

require('dotenv').config();
connection_string = process.env.MONGO_DB_CONNECT_STRING;

// parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client', 'views'));

mongoose.connect(connection_string);

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/getUsers', function (req, res) {
  userModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post('/createUser', async function (req, res) {
  const user = req.body;
  const newUser = await userModel.create({
    first_name: user.firstname,
    last_name: user.lastname,
    email: user.email,
    password: user.password,
  });
  console.log(newUser);
  await newUser.save();
  // res.json(user);
  res.redirect('/');
});

app.listen(3001, function (req, res) {
  console.log(__dirname);
  console.log('Server is running on port: 3001');
});

const mongoose = require('mongoose');

const userProductListSchema = new mongoose.Schema({});

// creates user schema inside database
const userProductModel = mongoose.model(
  'userProductList',
  userProductListSchema
);

module.exports = userDataModel;

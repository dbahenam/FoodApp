const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({});

// creates user schema inside database
const userDataModel = mongoose.model('userData', userDataSchema);

module.exports = userDataModel;

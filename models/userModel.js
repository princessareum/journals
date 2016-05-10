var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  },
  relationToBaby: {type: String, required: true},
  userEmail: {type: String, required: true, unique: true},
  password: {type: String, required: true},

});

module.exports = mongoose.model("User", userSchema);

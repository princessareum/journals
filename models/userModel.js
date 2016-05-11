var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  name: {
    firstName: {type: String},
    lastName: {type: String}
  },
  relationToBaby: {type: String},
  userEmail: {type: String, required: true, unique: true},
  password: {type: String, required: true},

});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(7), null);
};

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model("User", userSchema);

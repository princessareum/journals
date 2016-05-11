var mongoose = require('mongoose');

var groupSchema = new mongoose.Schema({
  name: {type: String, required: true},
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  admin: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model("Group", groupSchema);

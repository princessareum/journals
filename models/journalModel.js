var mongoose = require('mongoose');

var journalSchema = new mongoose.Schema({
  date: {type: String, required: true},
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  title: {type: String, required: true},
  photo: {type: String, required: true}, //type: url = get url from amazon s3
  contents: {type: String, required: true},
  group: {type: mongoose.Schema.Types.ObjectId, ref: "Group"}
});

module.exports = mongoose.model("Journal", journalSchema);

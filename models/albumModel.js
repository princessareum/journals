var mongoose = require("mongoose");

var albumSchema = new mongoose.Schema({

            title: {type: String, required: true},
            albumCover: {type: String}, //picture url from S3?
            content: [{type: mongoose.Schema.Types.ObjectId, ref: "Journal", default:[]}],
            group: {type: mongoose.Schema.Types.ObjectId, ref: "Group"}

});

module.exports = mongoose.model("Album", albumSchema);

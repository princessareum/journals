var AWS = require('aws-sdk');
var Keys = require('../keys.js');

AWS.config.update({
  accessKeyId: Keys.amazonAccess,
  secretAccessKey: Keys.amazonSecret,
  region: Keys.amazonRegion
});

var s3 = new AWS.S3();

module.exports = {
  SaveImage: function(req, res, next){
      var buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');
      var bucketName = 'newmomentstest/' + req.body.userEmail;
      var params = {
          Bucket: bucketName
        , Key: req.body.imageName
        , Body: buf
        , ContentType: 'image/' + req.body.imageExtension
        , ACL: 'public-read'
      };

      s3.upload(params, function (err, data) {
          console.log(err, data);
          if (err) return res.status(500).send(err);
          res.json(data);
      });

    }



}; //end of module.exports

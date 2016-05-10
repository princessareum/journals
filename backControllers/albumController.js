var Album = require('../models/albumModel.js');

module.exports = {
  CreateAlbum: function(req, res, next){
    var newAlbum = new Album(req.body);
    newAlbum.save(function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },

  GetAlbum: function(req, res, next){
    Album.find(req.query, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },

  UpdateAlbum: function(req, res, next){
    Album.findByIdAndUpdate(req.params.id, req.body, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
        }
    })
  },

  DeleteAlbum: function(req, res, next){
    Album.findByIdAndRemove(req.params.id, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
        }
    })
  }


}// end of module.exports

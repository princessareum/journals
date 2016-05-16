var Group = require('../models/groupModel.js');

module.exports = {
  CreateGroup: function(req, res, next){
    var newGroup = new Group(req.body);
    newGroup.save(function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },

  GetGroup: function(req, res, next){
    Group.find(req.query, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },

  GetAndPopulateGroup: function(req, res, next){
    Group.findOne(req.query).populate('users').exec(function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },




  UpdateGroup: function(req, res, next){
    Group.findByIdAndUpdate(req.params.id, req.body, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
        }
    })
  },

  DeleteGroup: function(req, res, next){
    Group.findByIdAndRemove(req.params.id, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
        }
    })
  }


}// end of module.exports

var User = require('../models/userModel.js');

module.exports = {
  CreateUser: function(req, res, next){
    var newUser = new User(req.body);
      newUser.save(function(err, response){
        if(err){
          res.status(500).json(err);
        } else {
          res.status(200).json(response);
          }
        })
      },

  // GetUser: function(req, res, next){
  //   User.find(function(err, response){
  //       if(err){
  //         res.status(500).json(err);
  //       } else {
  //         res.status(200).json(response);
  //       }
  //     })
  //   },

  GetUser: function(req, res, next){
    User.find(req.query, function(err, response){
        if(err){
          res.status(500).json(err);
        } else {
          res.status(200).json(response);
        }
      })
    },

  UpdateUser: function(req, res, next){
    User.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if(err){
          res.status(500).json(err);
        } else {
          res.status(200).json(response);
        }
      })
    },

  DeleteUser: function(req, res, next){
    User.findByIdAndRemove(req.params.id, function(err, response){
          if(err){
            res.status(500).json(err);
          } else {
            res.status(200).json(response);
          }
    })
  },

  Login: function(req, res, next){
    User.findOne(req.body, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        if(response){
          res.status(200).json({login: true, user: response});
        } else {
          res.status(200).json({login: false});
        }
      }
    })
  }






}; //end of module.exports

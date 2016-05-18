var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/userModel.js');

module.exports = function(passport){
  passport.serializeUser(function(user, done){
    done(null, user._id);
  });


  passport.deserializeUser(function(_id, done){
    User.findById(_id, function(err, user){
      done(err, user);
    });
  });


  passport.use('local-signup', new LocalStrategy({
    usernameField: 'userEmail',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, done){
    process.nextTick(function(){
      User.findOne({userEmail: email}, function(err, user){
        if(err) return done(err);
        if(user) {
          if(user.validPassword(password)){

            return done(null, user);
          }else {

            return done(null, false);
          }
        } else {
          var newUser = new User(req.body);
          newUser.email = email;
          newUser.password = newUser.generateHash(password);
          newUser.save(function(err){
            if(err) {

              throw err;
            }
            return done(null, newUser);
          });
        }
      });
    });
  }));

}; //end of module exports

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var port = 3000;
var app = express();

//keys
var sessionKeys = require('./sessionKeys.js');

//Back-end Controllers
var serverController = require('./backControllers/serverController.js');
var albumCtrl = require('./backControllers/albumController.js');
var userCtrl = require('./backControllers/userController.js');
var journalCtrl = require('./backControllers/journalController.js');
var groupCtrl = require('./backControllers/groupController.js');


require('./config/passport.js')(passport);


app.use(session({
  secret: sessionKeys.secret,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));





//auth
app.post('/auth', function(req, res, next){

  next();
}, passport.authenticate('local-signup'), function(req, res){
  res.send({login: true, user: req.user});
})



//User
app.post('/api/user', userCtrl.CreateUser);
app.get('/api/user', userCtrl.GetUser);
// app.get('/api/user/:id', userCtrl.GetUserById);
app.put('/api/user/:id', userCtrl.UpdateUser);
app.delete('/api/user/delete/:id', userCtrl.DeleteUser);
app.post('/api/user/login', userCtrl.Login);
app.get('/api/user/current', userCtrl.CurrentUser);
app.post('/api/user/email',userCtrl.GetUserByEmail);
app.get('/api/user/logout', userCtrl.Logout);

//Upload photo
app.post('/api/newimage', serverController.SaveImage);


//Journal
app.post('/api/journal',journalCtrl.CreateJournal);
app.get('/api/journal', journalCtrl.GetJournal);
app.get('/api/journal/:id', journalCtrl.GetJournalById);
app.put('/api/journal/:id', journalCtrl.UpdateJournal);
app.delete('/api/journal/:id', journalCtrl.DeleteJournal);


//Album
app.post('/api/album', albumCtrl.CreateAlbum);
app.get('/api/album', albumCtrl.GetAlbum);
app.put('/api/album/:id', albumCtrl.UpdateAlbum);
app.delete('/api/album/:id', albumCtrl.DeleteAlbum);


//Group
app.post('/api/group', groupCtrl.CreateGroup);
app.get('/api/group', groupCtrl.GetGroup);
app.put('/api/group/:id', groupCtrl.UpdateGroup);
app.delete('/api/group/:id', groupCtrl.DeleteGroup);
app.get('/api/group/populate', groupCtrl.GetAndPopulateGroup);



mongoose.connect('mongodb://localhost/journals');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connected')
});

app.listen(port, function(){
  console.log('listening on port ' + port);
});

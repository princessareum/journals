var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var expressSession = require('express-session');
var passport = require('passport');

//Back-end Controllers
var serverController = require('./backControllers/serverController.js');
var albumCtrl = require('./backControllers/albumController.js');
var userCtrl = require('./backControllers/userController.js');
var journalCtrl = require('./backControllers/journalController.js');
var groupCtrl = require('./backControllers/groupController.js');

var port = 3000;
var app = express();



app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

//User
app.post('/api/user', userCtrl.CreateUser);
app.get('/api/user/', userCtrl.GetUser);
// app.get('/api/user/:id', userCtrl.GetUserById);
app.put('/api/user/:id', userCtrl.UpdateUser);
app.delete('/api/user/:id', userCtrl.DeleteUser);


//Journal
app.post('/api/journal', journalCtrl.CreateJournal);
app.get('/api/journal', journalCtrl.GetJournal);
// app.get('/api/journal/:id', journalCtrl.GetJournalById);
app.put('/api/journal/:id', journalCtrl.UpdateJournal);
app.delete('/api/journal/:id', journalCtrl.DeleteJournal);


//Upload photo
app.post('/api/newimage', serverController.SaveImage);


//Group
app.post('/api/group', groupCtrl.CreateGroup);
app.get('/api/group', groupCtrl.GetGroup);
app.put('/api/group/:id', groupCtrl.UpdateGroup);
app.delete('/api/group/:id', groupCtrl.DeleteGroup);


//Album
app.post('/api/album', albumCtrl.CreateAlbum);
app.get('/api/album', albumCtrl.GetAlbum);
app.put('/api/album/:id', albumCtrl.UpdateAlbum);
app.delete('/api/album/:id', albumCtrl.DeleteAlbum);


















mongoose.connect('mongodb://localhost/journals');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose connected');
});

app.listen(port, function(){
  console.log('Unicorn + Pikachu + Hello Kitty = ' + port +' combo!');
});

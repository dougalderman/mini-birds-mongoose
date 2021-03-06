var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var sightingCtrl = require('./controllers/sightingCtrl');
var userCtrl = require('./controllers/userCtrl')

var app = express();

app.use(bodyParser.json());
app.use(cors());

var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.connect(mongoUri);

mongoose.connection.once('open', function() {
    console.log("Successfully connected to mongodb")
})

app.get('/api/sighting', sightingCtrl.read);
app.put('/api/sighting/:id', sightingCtrl.update);
app.post('/api/sighting', sightingCtrl.create);
app.delete('/api/sighting/:id', sightingCtrl.delete);

app.get('/user', userCtrl.read);
app.put('/user/:id', userCtrl.update);
app.post('/user', userCtrl.create);
app.delete('/user/:id', userCtrl.delete);

var portId = 3000;
app.listen(portId, function() {
    console.log('listening on port ', portId);      
})
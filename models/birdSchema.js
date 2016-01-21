var mongoose = require('mongoose');

var states = [
    'extinct',
    'extinct in the wild',
    'critically endangered',
    'endangered',
    'vulnerable',
    'near threatened',
    'conservation dependent',
    'least concern'
] 

var birdSchema = new mongoose.Schema({
    name: {type: 'String', lowercase: true},
    order: {type: 'String', lowercase: true, maxlength: 20},
    status: {type: 'String', lowercase: true, enum: states},
});

module.exports = birdSchema;
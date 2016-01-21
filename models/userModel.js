var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {type: 'String', lowercase: true},
    username: {type: 'String', lowercase: true, maxlength: 20, index: true},
    level: {type: 'Number', min: 1, max: 100},
    location: {type: 'String', lowercase: true, maxlength: 40},
    member: {type: 'Boolean', default: false},
    updatedAt: {type: 'Date'}
});

userSchema.pre('save', function(next) {
    var user = this;
    user.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('User', userSchema);
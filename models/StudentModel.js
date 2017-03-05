var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var StudentSchema = new Schema({	'facebookID' : String,	'status' : String,	'notes' : Array,	'classmates' : String,	'email' : String,	'classes' : Array});

module.exports = mongoose.model('Student', StudentSchema);

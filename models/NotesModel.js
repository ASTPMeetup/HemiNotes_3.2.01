var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var NotesSchema = new Schema({	'classNum' : String,	'status' : String,	'highlights' : Array,	'theme' : String,	'owner' : String});

module.exports = mongoose.model('Notes', NotesSchema);

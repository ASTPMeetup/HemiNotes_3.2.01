var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var NotesSchema = new Schema({

module.exports = mongoose.model('Notes', NotesSchema);
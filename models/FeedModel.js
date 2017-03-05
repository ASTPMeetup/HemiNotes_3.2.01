var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FeedSchema = new Schema({	'status' : String,	'members' : String,	'highlights' : String,	'bookmarks' : Array});

module.exports = mongoose.model('Feed', FeedSchema);

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FeedSchema = new Schema({

module.exports = mongoose.model('Feed', FeedSchema);
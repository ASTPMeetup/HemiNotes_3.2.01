var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//ObjectID in case we want to store accessToken in our database
// var ObjectId = Schema.ObjectId;

var StudentSchema = new Schema({
		'id': String,
		// 'access_token': ObjectId,
		'name': String,
		'photo': String,
		'email': String
});

module.exports = mongoose.model('Student', StudentSchema);

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var s077FSchema = new Schema({
	AnnID: {type:String, index: true},
	gender: {type: String, index: true},
	Formal: {type:String, index: true},
	SubjectID: {type: String, index: true},
	TopicID: {type: String, index: true},
	TierID: {type: String, index: true},
	AnnV: {type: String, index: true},
	timeSt: {type: Number, index: true},
	timeEt: {type: Number, index: true}
});

module.exports = mongoose.model('s077FSchema', s077FSchema, 'S077F');

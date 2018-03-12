var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var s015ISchema = new Schema({
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

module.exports = mongoose.model('s015ISchema', s015ISchema, 'S015I');

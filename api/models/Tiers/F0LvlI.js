var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var f0lvlISchema = new Schema({
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

module.exports = mongoose.model('f0lvlISchema', f0lvlISchema, 'IF0Lvl');

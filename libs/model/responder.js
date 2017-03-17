var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Images = new Schema({
	kind: {
		type: String,
		enum: ['thumbnail', 'detail'],
		required: true
	},
	url: { type: String, required: true }
});

var custome = new Schema({
	name: String,
	tel: String,
	description: String,
	cometime: {type: Date, default: Date.now}
});

//	Responder
var ctype = ['c', 'rs'];
var responderSchema = new Schema({
	name: { type: String, required: true},
	tel: { type: String, required: true},
	type: { type: String, enum: ctype},
	title: String,
	customers: [custome],		//来访者
	company: String,
	description: String,
	images: [Images],
	time: { type: Date},
	manualDoor:[Date],
	inviteurl: [
		{name: String,
			url: String
		}
	],
	accredit: [custome]
});

module.exports = mongoose.model('responder', responderSchema);

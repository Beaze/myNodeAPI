var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Customer
var Images = new Schema({
	kind: {
		type: String,
		enum: ['thumbnail', 'detail'],
		required: true
	},
	url: { type: String, required: true }
});

// customer type
var ctype = ['c', 'rs'];//	c:访客，rs：被访者

var Customer = new Schema({
	name: { type: String, required: true},
	tel: { type: String, required: true},
	type: { type: String, enum: ctype},
	title: String,
	responder: { type: String, required: true },//被访者
	company: { type: String, required: false},
	description: { type: String, required: true },
	images: [Images],
	time: { type: Date, required: true},
	inviteurl: String
});

Customer.path('title').validate(function (v) {
	return v.length > 0 && v.length < 70;
});

module.exports = mongoose.model('Customer', Customer);

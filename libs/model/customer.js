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

var customerSchema = new Schema({
	name: { type: String, required: true},
	tel: { type: String, required: true},
	type: { type: String, enum: ctype},
	title: { type:String, required: true},
	responder: { type: String, required: true },//被访者
	company: String,
	description: String,
	images: [Images],
	onset: { type: Date.now},
	conclude: {type: Date.now},
	inviteurl: String
});

customerSchema.path('title').validate(function (v) {
	return v.length > 0 && v.length < 70;
});

module.exports = mongoose.model('Customer', customerSchema);

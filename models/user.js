'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	email : {type: String},
	userName : {type: String},
	firstName : {type : String},
	password : {type: String},	
});

UserSchema.methods.validPassword = function(password) {	
	//TODO: Enrypt password before saving here
	if(this.password === password)
		return true;
	else
		return false;
};

var User = mongoose.model('user', UserSchema);

module.exports = User;
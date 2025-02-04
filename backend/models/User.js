const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	title: {
		type: String,
		required: true,
	},
	department: {
		type: String,
		required: true,
		maxLength: 20,
	},
	role: {
		type: String,
		required: true,
	},
	image: {
		 public_id:{
			type:String,
			required:true,
		 },
		 url:{
          type:String,
		  required:true,
		 }
	},
});

module.exports = mongoose.model("User", userSchema);

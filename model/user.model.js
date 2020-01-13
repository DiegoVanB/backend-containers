const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		require: "Required"
	},
	password : {
		type: String,
		require: "Required"
	},
	email: {
		type: String,
		require: "Required"
	}
});

mongoose.model("User", UserSchema);

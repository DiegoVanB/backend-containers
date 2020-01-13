const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Containers", {useNewUrlParser: true},(error) => {
	if(!error){
		console.log("Success Connected");
	} else {
		console.log("Error connecting");
	}
});

const Course = require('./course.model');
const User = require('./user.model');
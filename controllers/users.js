const express = require("express");
const mongoose = require("mongoose");
const handleBars = require("handlebars/runtime");
const router = express.Router();
const UserModel = mongoose.model("User");

router.get("/list", (req, res) => {
	// Getting
	UserModel.find((err, docs) => {
		if(!err){
			console.log(docs);
			handleBars.compile({}, {
				allowedProtoMethod: {
				trim:true
				}});
			res.render("users", {data: docs,
					allowedProtoMethods : "true"
				})
		}
		else
		{
			res.send("Error")
		}
	});
});

module.exports = router;
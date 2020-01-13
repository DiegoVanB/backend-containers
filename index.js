const connection = require('./model');
const express = require("express");
const application = express();
const path = require("path");
const expressHandler = require("express-handlebars");
const bodyparser = require("body-parser");

const CourseController = require("./controllers/courses");
const UserController = require("./controllers/users");

application.use(bodyparser.urlencoded({
	extended: true
}));

application.set('views', path.join(__dirname, "/views/"));
var hbs = exphbs.create({
	extname: "hbs",
	defaultLayout: "mainlayout",
	layoutsDir: __dirname + "/views/layouts",
	allowedProtoMethods: {
		trim: true
	}
});
application.engine("hbs", hbs);

application.set("view engine", "hbs");

application.get("/", (req, res) => {
//	res.send('<h1>Hello World</h1>')
	res.render("index", {})
});

application.use("/course", CourseController);
application.use("/user", UserController);

application.listen("3001", () => {
	console.log("Server started");
});
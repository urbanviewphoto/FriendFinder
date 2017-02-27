var path = require("path");

module.exports = function(app) {

	app.get("/home", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	//if no matching route default to home
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'))
	});
};
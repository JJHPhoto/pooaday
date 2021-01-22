const express = require("express");
// const sessions = require("express-session");

const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => {
		console.log(
			"==> Listening on port %s. Visit http://localhost:%s/ in your browser.",
			PORT,
			PORT
		);
	});
});

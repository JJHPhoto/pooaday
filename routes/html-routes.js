// const path = require("path");
//commented out till we use, if we use.
const router = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

router.get("/", (req, res) => {
	if (req.user) {
		return res.redirect("/members");
	}
	res.render("index");
	// res.sendFile(path.join(__dirname, "/signup.html"));
});

router.get("/signup", (req, res) => {
	if (!req.user) {
		return res.redirect("/");
	}
	res.render("login");
});

router.get("/myentry", isAuthenticated, (req, res) => {
	res.render("report");
});
router.get("/login", (req, res) => {
	if (req.user) {
		return res.redirect("/");
	}
	res.render("login");
});

router.get("/members", isAuthenticated, async (req, res) => {
	const report = await db.Report.findAll({
	  where: {UserId: req.user.id},
	  raw:true
	})
	res.render("members", {Report: report});
  });

router.get("/bm", isAuthenticated, (req, res) => {
	res.render("bm");
});


module.exports = router;
// router.get("/report", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/report.html"));
// });

// };

const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");

const router = require("express").Router();

// module.exports = function (app) {
router.get("/", (req, res) => {
  if (req.user) {
    res.redirect("/members");
  }
  res.render("index");
  // res.sendFile(path.join(__dirname, "/signup.html"));
});

router.get("/signup", (req, res) => {
  if (req.user) {
    res.redirect("/");
  }
  res.render("login");
});

router.get("/login", (req, res) => {
  if (req.user) {
    res.redirect("/");
  }
  res.render("login");
});

router.get("/members", isAuthenticated, (req, res) => {
  if (req.user) {
    res.redirect("/");
  }
  res.render("members");
});

router.get("/bm", isAuthenticated, (req, res) => {
  if (req.user) {
    res.redirect("/");
  }
  res.render("bm");
});

// router.get("/report", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/report.html"));
// });

module.exports = router;
// };

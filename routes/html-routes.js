// const path = require("path");
//commented out till we use, if we use.
const router = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", (req, res) => {
  if (req.user) {
    return res.redirect("/members");
  }
  res.render("index");
  // res.sendFile(path.join(__dirname, "/signup.html"));
});

router.get("/signup", (req, res) => {
  if (req.user) {
    return res.redirect("/");
  }
  res.render("login");
});

router.get("/login", (req, res) => {
  if (req.user) {
    return res.redirect("/");
  }
  res.render("login");
});

router.get("/members", isAuthenticated, (req, res) => {
  res.render("members");
});

router.get("/bm", isAuthenticated, (req, res) => {
  res.render("bm");
});

module.exports = router;
// router.get("/report", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/report.html"));
// });

// };

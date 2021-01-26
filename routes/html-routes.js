// const path = require("path");
//commented out till we use, if we use.

const isAuthenticated = require("../config/middleware/isAuthenticated");

const router = require("express").Router();

// module.exports = function (app) {
router.get("/", isAuthenticated, (req, res) => {
  if (req.user) {
    res.redirect("/members");
  }
  res.render("index");
  // res.sendFile(path.join(__dirname, "/signup.html"));
});

// router.get("/signup", (req, res) => {
//   if (req.user) {
//     res.redirect("/");
//   }
//   res.sendFile(path.join(__dirname, "../public/login.html"));
// });

// router.get("/login", (req, res) => {
//   if (req.user) {
//     res.redirect("/members");
//   }
//   res.sendFile(path.join(__dirname, "../public/login.html"));
// });

// router.get("/members", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/members.html"));
// });

// router.get("/bm", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/bm.html"));
// });
// router.get("/report", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/report.html"));
// });

module.exports = router;
// };

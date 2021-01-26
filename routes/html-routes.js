// const path = require("path");
//commented out till we use, if we use.

const isAuthenticated = require("../config/middleware/isAuthenticated");

// const router = require("express").Router();

module.exports = function (app) {
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("index");
    // res.sendFile(path.join(__dirname, "/signup.html"));
  });

  app.get("/signup", (req, res) => {
    if (req.user) {
      res.redirect("/");
    }
    res.render("login");
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/");
    }
    res.render("login");
  });

  app.get("/members", isAuthenticated, (req, res) => {
    if (req.user) {
      res.redirect("/");
    }
    res.render("members");
  });

  app.get("/bm", isAuthenticated, (req, res) => {
    if (req.user) {
      res.redirect("/");
    }
    res.render("bm");
  });
};

// router.get("/report", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/report.html"));
// });

// };

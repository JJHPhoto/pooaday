const isAuthenticated = require("../config/middleware/isAuthenticated");
const { BM } = require("../models");
// const router = require("express").Router();

module.exports = function (app) {
  app.get("/api/bm", isAuthenticated, (req, res) => {
    BM.findAll({
      where: {
        UserId: req.user.id,
      },
    }).then((bm) => {
      res.json(bm);
    });
  });

  app.post("/api/bm/", isAuthenticated, (req, res) => {
    BM.create({
      date: req.body.date,
      time: req.body.time,
      type: req.body.type,
      amount: req.body.amount,
      speed: req.body.speed,
      comfort: req.body.comfort,
    }).then((bm) => {
      res.json(bm);
    });
  });
};

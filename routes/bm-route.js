const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = require("express").Router();
const { BM } = require("../models");

router.get("/api/bm", isAuthenticated, (req, res) => {
  BM.findAll({
    where: {
      UserId: req.user.id,
    },
  }).then((bm) => {
    res.json(bm);
  });
});

router.post("/api/bm/", isAuthenticated, (req, res) => {
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

module.exports = router;

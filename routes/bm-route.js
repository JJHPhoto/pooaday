const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = require("express").Router();
const { BM } = require("../models");
const bm = require("../models/bm");

router.get("/api/bm", isAuthenticated, (req, res) => {
  BM.findAll(data, {
    where: {
      UserId: req.user.id,
    },
  }).then((bm) => {
    res.render("bm", {bm});
  });
});

router.post("/api/bm", isAuthenticated, (req, res) => {
  console.log(req.user);
  BM.create({
    date: req.body.date,
    time: req.body.time,
    type: req.body.type,
    amount: req.body.amount,
    speed: req.body.speed,
    comfort: req.body.comfort,
    UserId: req.user.id,
  }).then((bm) => {
    console.log(bm);
    res.json(bm);
  });
});

router.put("/api/bm", isAuthenticated, (req, res) => {
  console.log(req.body)
  const { date, time, type, amount, speed, comfort, id } = req.body;
  const updateBm = {date, time, type, amount, speed, comfort, UserId};

  BM.update(updateBm, {
  
    where: {
      UserId
    },
  }).then( (res) => {
    res.json(res);
  });
});

module.exports = router;

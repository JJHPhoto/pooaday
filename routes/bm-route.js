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

router.post("/api/bm", isAuthenticated, (req, res) => {
	console.log(req.user);
	BM.create({
		date: req.body.date,
		time: req.body.time,
		style: req.body.style,
		amount: req.body.amount,
		speed: req.body.speed,
		comfort: req.body.comfort,
		UserId: req.user.id,
	}).then((bm) => {
    res.json(bm);
    
	});
});

router.put("/api/bm/:id", isAuthenticated, (req, res) => {
	console.log(req.body);
	BM.update(req.body, {
    
      id: req.body.id,
      time: req.body.time,
      date: req.body.date,
      style: req.body.style,
      amount: req.body.amount,
      category: req.body.category,

      where: {
        id: req.body.id,
    },
		
		
	}).then((bm) => {
		res.json(bm);
	});
});

module.exports = router;

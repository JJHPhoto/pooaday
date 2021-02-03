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
/////

router.get("/myentry", isAuthenticated, (req, res) => {
	BM.findAll({
		where: {
			UserId: req.user.id,
		},
	}).then((dbresults) => {
		let resultsObj = dbresults.map((dbresult) => dbresult.toJSON());
		let results = { BMs: resultsObj };
		//BMs to views
		console.log(results, "ressrersresr");
		///// getting something... getting arrays

		res.render("report", results);
	});
});
/// not directing me to bm

///

router.post("/api/bm", isAuthenticated, (req, res) => {
	console.log(req.user, "user");
	console.log(req.params.id, "params");
	// this returns undefined..................................
	console.log(req.params, "paramsssss");
	// retuns nothing..

	BM.create({
		date: req.body.date,
		time: req.body.time,
		style: req.body.style,
		styleRating: req.body.styleRating,
		amount: req.body.amount,
		amountRating: req.body.amountRating,
		speed: req.body.speed,
		speedRating: req.body.speedRating,
		comfort: req.body.comfort,
		comfortRating: req.body.comfortRating,
		UserId: req.user.id,
	}).then((bm) => {
		res.json(bm);
	});
});

router.put("/api/bm", isAuthenticated, (req, res) => {
	console.log(req.body);
	BM.update(req.body, {
		where: {
			id: req.body.id,
		},
	}).then((bm) => {
		res.json(bm);
	});
});

router.delete("/api/bm/:id", (req,res)=>{
  BM.destroy({
    where:{
      id : req.params.id
    }
  }).then((bm) =>{
    if(bm) {
      return res.json({success:true});
    }
    res.status(500).json({success:false});
  })
})


module.exports = router;

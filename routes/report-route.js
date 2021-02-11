const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = require("express").Router();
const { Report } = require("../models");

router.get("/api/members", isAuthenticated, (req, res) => {
  Report.findAll({
    where: {
      UserId: req.user.id,
    },
  }).then((result) => {
    res.json(result);
  });
});

router.get("/myentry", isAuthenticated, (req, res) => {
	Report.findAll({
		where: {
			UserId: req.user.id,
		},
	}).then((dbresults) => {
		let resultsObj = dbresults.map((dbresult) => dbresult.toJSON());
		let results = { Reports: resultsObj };

		console.log(results, "ressrersresr");
		///// getting something... getting arrays

		res.render("report", results);
	});
});
router.post("/api/members", isAuthenticated, (req,re)=>{
    Report.create({
        mood: req.body.mood,
        water: req.body.water,
        food: req.body.food,
        activity: req.body.activity,
        sleep: req.body.sleep,
        medication: req.body.medication


    }).then((result)=>{
        res.json(result);
    })
})

module.exports = router;

// const isAuthenticated = require("../config/middleware/isAuthenticated");
// const router = require("express").Router();
// const { BM } = require("../models");

// router.get("/api/bm", isAuthenticated, (req, res) => {
//   BM.findAll({
//     where: {
//       UserId: req.user.id,
//     },
//   }).then((bm) => {
//     res.json(bm);
//   });
// });

// module.exports = router;

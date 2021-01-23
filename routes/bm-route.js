const isAuthenticated = require("../config/middleware/isAuthenticated");
const {BM} = require("../models");
const passport = require("../config/middleware/isAuthenticated")

module.exports = (app) => {
    app.get("/api/bm/", isAuthenticated, (req,res) =>{
        BM.findAll({
            where: {
                id: //waiting for demo file from passport, need to rewatch the demo
            }
        }).then((BM)=>{
            res,json(BM);
        })
    });

    app.post("/api/bm/", isAuthenticated, (req,res) =>{
        BM.create({
            date: req.body.date,
            time: req.body.time,
            type: req.body.type,
            amount: req.body.amount,
            speed: req.body.speed,
            comfort: req.body.comfort,

        })
        .then((BM)=>{
         res.json(BM);
        });
    })
}


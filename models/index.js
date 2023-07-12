"use strict";

var fs = require("fs");
var path = require("path");
var {Sequelize} = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.js");
var db = {};

// const { Sequelize } = require('sequelize');

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_INSTANCE = process.env.DB_INSTANCE;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: `/cloudsql/${process.env.DB_INSTANCE}`,
  dialect: 'mysql',
  dialectOptions: {
    socketPath: `/cloudsql/${DB_INSTANCE}`,
  },
});

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function (file) {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.js");
var db = {};

if (process.env[config.production.use_env_variable]) {
  var sequelize = new Sequelize(
    process.env[config.production.use_env_variable]
  );
} else {
  var sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    config.development
  );
}

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
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

const bcrypt = require("bcryptjs");

console.log("user model");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = function (models) {
    User.hasMany(models.BM, {
      onDelete: "CASCADE",
    });
    User.hasMany(models.Report, {
      onDelete:" CASCADE",
    });
  };
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};

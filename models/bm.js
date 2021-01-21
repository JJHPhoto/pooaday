module.exports = function (sequelize, DataTypes) {
  const BM = sequelize.define("BM", {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("solid", "normal", "liquid"),
      allowNull: false,
    },
    amount: {
      type: DataTypes.ENUM("little", "normal", "a lot"),
      allowNull: false,
    },
    speed: {
      type: DataTypes.ENUM("slow", "normal", "fast"),
      allowNull: false,
    },
    comfort: {
      type: DataTypes.ENUM("sad", "normal", "good"),
      allowNull: false,
    },
  });
};

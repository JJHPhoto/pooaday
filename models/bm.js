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
      type: DataTypes.STRING,
      validate: {
        isIn: ["solid", "normal", "liquid"],
      },
      allowNull: false,
      defaultValue: "normal",
    },
    amount: {
      type: DataTypes.STRING,
      validate: {
        isIn: ["little", "normal", "a lot"],
      },
      allowNull: false,
      defaultValue: "normal",
    },
    speed: {
      type: DataTypes.STRING,
      validate: {
        isIn: ["slow", "normal", "fast"],
      },
      allowNull: false,
      defaultValue: "normal",
    },
    comfort: {
      type: DataTypes.STRING,
      validate: {
        isIn: ["sad", "normal", "good"],
      },
      allowNull: false,
      defaultValue: "normal",
    },
  });
};

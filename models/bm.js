module.exports = (sequelize, DataTypes) => {
  const BM = sequelize.define("BM", {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    style: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["liquid", "soft", "normal", "hard", "solid"]],
      },
      allowNull: false,
      defaultValue: "normal",
    },
    amount: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["little", "normal", "a lot"]],
      },
      allowNull: false,
      defaultValue: "normal",
    },
    speed: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["less than 5 mins", "5 - 10 mins", "more than 10 mins"]],
      },
      allowNull: false,
      defaultValue: "5 - 10 mins",
    },
    comfort: {
      type: DataTypes.STRING,
      validate: {
        isIn: [
          ["very uncomfortable", "comfortable", "it's okay", "nice", "great"],
        ],
      },
      allowNull: false,
      defaultValue: "it's okay",
    },
  });

  BM.associate = (models) => {
    BM.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return BM;
};

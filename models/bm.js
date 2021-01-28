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
        isIn: [["1", "2", "3", "4", "5"]],
      },
      allowNull: false,
      defaultValue: "3",
    },
    amount: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["1", "2", "3"]],
      },
      allowNull: false,
      defaultValue: "2",
    },
    speed: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["1","2","3"]],
      },
      allowNull: false,
      defaultValue: "2",
    },
    comfort: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["1", "2", "3", "4", "5"]],
      },
      allowNull: false,
      defaultValue: "3",
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

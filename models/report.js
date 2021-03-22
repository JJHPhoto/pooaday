module.exports = function (sequelize, DataTypes) {
  const Report = sequelize.define("Report", {
    date: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    mood: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["Unhappy", "So so", "Okay", "Happy", "Very Happy"]],
      },
      // allowNull: false,
    },
    water: {
      type: DataTypes.STRING,
      validate: {
        isIn: [
          [
            "1 Bottle",
            "2 Bottles",
            "3 Bottles",
            "4 Bottles",
            "5 Bottles",
            "6 Bottles",
          ],
        ],
      },
      // allowNull: true,
    },
    food: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["Breakfast", "Lunch", "Dinner", "Fruit & Veggies", "Snacks"]],
      },
    },
    activity: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["1", "2", "3", "4", "5"]],
      },
    },
    sleep: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["1", "2", "3", "4", "5"]],
      },
    },
    medication: {
      type: DataTypes.TEXT,
    },
    note: {
      type: DataTypes.TEXT,
    },
  });
  Report.associate = ({ Report, User, BM }) => {
    Report.belongsTo(User);
    Report.belongsToMany(BM, { through: "BmReport" });
  };
  return Report;
};

module.exports = function (sequelize, DataTypes) {
  const Report = sequelize.define("Report", {
    mood: {
      type: DataTypes.STRING,
      validate: {
      isIn: [["bad", "not bad", "good", "very good", "excellent"]],
      },
      allowNull: false,
    },
    water:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    food: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity:{
      type: DataTypes.STRING,
      validate: {
        isIn:[["no activity", "low activity", "moderate activity","vigorous activity" ]],
      },
      allowNull: false,
    },
    sleep :{
      type: DataTypes.STRING,
      validate: {
        isIn : [["little", "normal", "a lot"]]
      },
      allowNull: false,
    },
    medication: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Report;
};

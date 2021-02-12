module.exports = function (sequelize, DataTypes) {
	const Report = sequelize.define("Report", {
		mood: {
			type: DataTypes.STRING,
			validate: {
			isIn: [["unhappy", "so so", "okay", "happy", "ecstatic"]],
			},
			allowNull: false,
		  },
		  water:{
			type: DataTypes.STRING,
			validate:{
				isIn : [["1 bottle",
				"2 bottles",
				"3 bottles",
				"4 bottles",
				"5 bottles",
				"6 bottles",]]
			},
			allowNull: false,
		  },
		  food: {
			type: DataTypes.STRING,
			validate:{
				isIn:[["breakfast", "lunch", "dinner", "fruit & veggies", "snacks"]]
			},
			
		  },
		  activity:{
			type: DataTypes.STRING,
			validate: {
			  isIn:[["very little",
			  "light",
			  "moderate",
			  "active",
			  "vigorous", ]],
			},
			
		  },
		  sleep :{
			type: DataTypes.STRING,
			validate: {
			  isIn : [["poor", "bad", "okay", "good", "relaxed"]]
			},
			
		  },
		  medication: {
			type: DataTypes.STRING,
			
		  },
		  note: {
			type: DataTypes.STRING,
			
		  }
		});
		Report.associate = (models) => {
			Report.belongsTo(models.User, {
				foreignKey: {
				allowNull: false,
				},
			});
		};
		return Report;
	};
	


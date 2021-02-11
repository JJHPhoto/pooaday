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
			allowNull: false,
		  },
		  activity:{
			type: DataTypes.STRING,
			validate: {
			  isIn:[["very litte",
			  "lightly",
			  "moderate",
			  "active",
			  "vigorous", ]],
			},
			allowNull: false,
		  },
		  sleep :{
			type: DataTypes.STRING,
			validate: {
			  isIn : [["poor", "bad", "okay", "good", "relaxed"]]
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
	


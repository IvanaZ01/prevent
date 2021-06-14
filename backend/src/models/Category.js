const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../database');

class Category extends Model {}

Category.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		createdBy: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		updatedBy: {
			type: DataTypes.DECIMAL,
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: 'Category',
		timestamps: true,
	}
);

console.log(Category === sequelize.models.Category);

module.exports = Category;
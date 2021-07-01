const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../database');

class Category extends Model {}

Category.init(
	{
		id: {
			type: DataTypes.NUMBER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
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
		modelName: 'category',
		timestamps: true,
	}
);

module.exports = Category;

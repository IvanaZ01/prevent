const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('./../database');
const Article = require('./Article');

class Category extends Sequelize.Model {}

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
console.log(sequelize.models);

module.exports = Category;

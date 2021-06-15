const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('./../database');
const Category = require('./Category');

class Article extends Sequelize.Model {}

Article.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		discount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Article',
		timestamps: true,
	}
);

console.log(Article === sequelize.models.Article);

module.exports = Article;

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../database');
const Category = require('./Category');

class Article extends Model {}

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
		modelName: 'article',
		timestamps: true,
	}
);

module.exports = Article;

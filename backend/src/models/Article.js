const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../database');

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
		modelName: 'Article',
		timestamps: true,
	}
);


console.log(Article === sequelize.models.Article);

module.exports = Article;
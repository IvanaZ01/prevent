const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../database');
const Article = require('./Article');
const Category = require('./Category');

class ArticleCategory extends Model {}

ArticleCategory.init(
	{
		articleId: {
			type: DataTypes.INTEGER,
			references: {
				model: Article,
			},
		},
		categoryId: {
			type: DataTypes.INTEGER,
			references: {
				model: Category,
			},
		},
	},
	{
		sequelize,
		modelName: 'ArticleCategory',
		timestamps: true,
		tableName: 'ArticlesCategories',
	}
);

console.log(ArticleCategory === sequelize.models.ArticleCategory);

module.exports = ArticleCategory;

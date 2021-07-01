const User = require('./User');
const Article = require('./Article');
const Category = require('./Category');
const ArticleCategory = require('./ArticleCategory');

ArticleCategory.belongsTo(Article);
ArticleCategory.belongsTo(Category);

Article.belongsToMany(Category, {
	through: ArticleCategory,
});

Category.belongsToMany(Article, {
	through: ArticleCategory,
	as: 'categories',
});

module.exports = {
	User,
	Article,
	Category,
	ArticleCategory,
};

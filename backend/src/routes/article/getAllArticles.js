const { Article, Category } = require('../../models');

const getAllArticles = async (res) => {
	const articles = await Article.findAll({
		include: { model: Category, as: 'categories' }
	});
	res.send(articles);
};

module.exports = getAllArticles;

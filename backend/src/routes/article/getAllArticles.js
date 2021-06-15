const Article = require('../../models/Article');

const getAllArticles = async (res) => {
	const articles = await Article.findAll();
	res.send(articles);
};

module.exports = getAllArticles;

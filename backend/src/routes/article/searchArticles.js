const { Op, json } = require('sequelize');
const { Article, ArticleCategory } = require('../../models');

const searchArticles = async (filter, res) => {
  let articleCategory;
  let itemsForSearch;

	if (filter.category == '0') {
		articleCategory = await Article.findAll();
    itemsForSearch = articleCategory.map((item) => item.id)
	} else {
		articleCategory = await ArticleCategory.findAll({
			where: {
				categoryId: parseFloat(filter.category),
			},
		});
    itemsForSearch = articleCategory.map((item) => parseFloat(item.articleId))
	}

	console.log(JSON.stringify(articleCategory));

	let articles = await Article.findAll({
		where: {
			[Op.and]: [
				{
					name: {
						[Op.like]: `%${filter.search}%`,
					},
				},
				{
					id: {
						[Op.in]: itemsForSearch,
					},
				},
			],
		},
	});

	res.send(articles);
};

module.exports = searchArticles;

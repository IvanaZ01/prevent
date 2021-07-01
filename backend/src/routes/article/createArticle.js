const { Article, Category } = require('../../models');

const createArticle = async (
	{ name, description, price, discount, categories },
	res
) => {
	let article = await Article.create(
		{
			name,
			description,
			price,
			discount,
		}
	);

	categories.forEach(async (category) => {
		let createdCategory = await Category.findOne({
			where: {
				id: category
			}
		});

		await article.addCategory(createdCategory);
	});

	res.send(article.toJSON());
};

module.exports = createArticle;

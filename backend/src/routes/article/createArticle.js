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
			categories,
		},
		{
			include: [Category],
		}
	);

	categories.forEach(async (category) => {
		const createdCategory = await Category.create({ ...category });
		await article.addCategory(createdCategory);
	});

	res.send(article.toJSON());
};

module.exports = createArticle;

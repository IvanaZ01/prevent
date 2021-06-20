const { Category } = require('../../models');

const updateCategory = async (
	id,
	{name, description},
	res
) => {
	let category = await Category.findByPk(id);

	if (name) category.name = name;
	if (description) category.description = description;

	category.save();

	res.send(category.toJSON());
};

module.exports = updateCategory;

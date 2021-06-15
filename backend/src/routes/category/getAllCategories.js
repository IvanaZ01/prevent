const { Category } = require('../../models');

const getAllCategories = async (res) => {
	const categories = await Category.findAll();
	res.send(categories);
};

module.exports = getAllCategories;

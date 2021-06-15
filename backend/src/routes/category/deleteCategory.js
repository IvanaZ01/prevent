const { Category } = require('../../models');

const deleteCategory = async ({ id }, res) => {
	await Category.destroy({
		where: {
			id,
		},
	});
	res.send();
};

module.exports = deleteCategory;

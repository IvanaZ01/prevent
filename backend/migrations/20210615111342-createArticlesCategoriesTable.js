'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('ArticlesCategories', {
			articleId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Articles',
					key: 'id',
				},
				allowNull: false,
			},
			categoryId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Categories',
					key: 'id',
				},
				allowNull: false,
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable('ArticlesCategories');
	},
};

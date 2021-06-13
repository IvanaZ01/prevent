'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(
			'users',
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true,
				},
				role: {
					type: Sequelize.STRING,
					defaultValue: false,
					allowNull: false,
				},
				name: {
					type: Sequelize.STRING,
					defaultValue: false,
					allowNull: false,
				},
				username: {
					type: Sequelize.STRING,
					defaultValue: false,
					allowNull: false,
				},
				email: {
					type: Sequelize.STRING,
					defaultValue: false,
					allowNull: false,
				},
				passwordHash: {
					type: Sequelize.STRING,
					defaultValue: false,
					allowNull: false,
				},
				createdAt: {
					type: Sequelize.DATE,
				},
				updatedAt: {
					type: Sequelize.DATE,
				},
			},
			{
				engine: 'InnoDB',
				charset: 'utf8mb4',
			}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('users');
	},
};

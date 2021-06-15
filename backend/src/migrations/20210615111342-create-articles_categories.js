'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Articles_categories',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        articleId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Articles',
            key: 'id'
          },
          allowNull: false
        },
        categoryId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Categories',
            key: 'id'
          },
          allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      }
  )},
down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Articles_categories')
  }
};

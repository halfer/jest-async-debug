'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('expenditure_tag', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      expenditure_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'expenditure',
          key: 'id',
        }
      },
      tag_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tag',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('expenditure_tag');
  }
};
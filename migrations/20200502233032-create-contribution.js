'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contribution', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      donation_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'donation',
          key: 'id',
        },
      },
      expenditure_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'expenditure',
          key: 'id',
        },
      },
      amount: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('contribution');
  }
};
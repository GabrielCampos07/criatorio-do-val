'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ovos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pai: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mae: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      chocado: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nasce: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ovos');
  }
};
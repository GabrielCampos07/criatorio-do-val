'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ovos', [
      {
        pai: 'Biquinho',
        mae: 'Tieta',
        chocado: '2022-04-17',
        nasce: '2022-05-18',
      },
      {
        pai: 'Arroz Doce',
        mae: 'Giselle',
        chocado: '2022-04-17',
        nasce: '2022-05-18',
      },
      {
        pai: 'Preto',
        mae: 'Tieta',
        chocado: '2022-04-17',
        nasce: '2022-05-18',
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ovos', null, {})
  }
};

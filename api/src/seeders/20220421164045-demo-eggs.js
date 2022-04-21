'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ovos', [
      {
        pai: 'Biquinho',
        mae: 'Tieta',
        chocado: '13/04/2022',
        nasce: '14/05/2022',
      },
      {
        pai: 'Arroz Doce',
        mae: 'Giselle',
        chocado: '20/04/2022',
        nasce: '30/05/2022',
      },
      {
        pai: 'Preto',
        mae: 'Tieta',
        chocado: '17/04/2022',
        nasce: '18/05/2022',
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ovos', null, {})
  }
};

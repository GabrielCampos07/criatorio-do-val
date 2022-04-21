'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contatos', [
      {
        nome: 'Vitinho',
        numero: '129919-8999',
        cidade: 'Vitória',
        email: 'vitinhoelboy@hotmail.com',
      },
      {
        nome: 'Henry',
        numero: '129919-8991',
        cidade: 'São Vicente',
        email: 'henrysaovicente@hotmail.com',
      },
      {
        nome: 'Goldones',
        numero: '129919-8922',
        cidade: 'Guaraná do Norte',
        email: 'goldones@hotmail.com',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contatos', null, {})
  }
};

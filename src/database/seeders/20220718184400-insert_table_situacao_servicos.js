'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const estado = [
      {
        id: 1,
        nome: 'Orçamentar'
      },
      {
        id: 2,
        nome: 'Executar'
      },
      {
        id: 3,
        nome: 'Finalizado'
      }
    ];
    
    await queryInterface.bulkInsert('situacao_servicos', estado, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('situacao_servicos', null, {});
  }
};

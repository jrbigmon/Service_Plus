'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    const estados = [
      {
        id: 1,
        estado: 'Orçamentar'
      },
      {
        id: 2,
        estado: 'Orçado'
      },
      {
        id: 3,
        estado: 'Executar'
      },
      { 
        id: 4,
        estado: 'Finalizado'
      },
      {
        id: 5,
        estado: 'Cancelado'
      }
    ]

    await queryInterface.bulkInsert('situacao_servicos', estados, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('situacao_servicos', null, {})
  }
}

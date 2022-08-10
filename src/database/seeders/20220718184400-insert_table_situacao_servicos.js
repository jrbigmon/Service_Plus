'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    const estado = [
      {
        id: 1,
        estado: 'Orçamentar'
      },
      {
        id: 2,
        estado: 'Executar'
      },
      {
        id: 3,
        estado: 'Finalizado'
      }
    ]

    await queryInterface.bulkInsert('situacao_servicos', estado, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('situacao_servicos', null, {})
  }
}

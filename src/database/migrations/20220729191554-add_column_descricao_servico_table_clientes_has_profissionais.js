'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('clientes_has_profissionais', 'descricao_servico', {
      type: Sequelize.DataTypes.STRING(800),
      allowNull: false,
      after: 'preco_servico'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('clientes_has_profissionais', 'descricao_servico')
  }
}

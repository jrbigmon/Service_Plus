'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('clientes', 'numero', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      after: 'cep'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('clientes', 'numero')
  }
}

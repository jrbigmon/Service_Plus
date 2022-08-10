'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('situacao_servicos', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      estado: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('situacao_servicos')
  }
}

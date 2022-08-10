'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      sobrenome: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      cep: {
        type: Sequelize.DataTypes.STRING(8),
        allowNull: false
      },
      telefone: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: false
      },
      cpf: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
        unique: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes')
  }
}

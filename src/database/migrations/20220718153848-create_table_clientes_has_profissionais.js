'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clientes_has_profissionais', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cliente_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'clientes' },
          key: 'id'
        },
        allowNull: false
      },
      profissional_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'profissionais' },
          key: 'id'
        },
        allowNull: false
      },
      data_servico: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      preco_servico: {
        type: Sequelize.DataTypes.FLOAT(4, 2),
        allowNull: false
      },
      situacao_servico_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'situacao_servicos' },
          key: 'id'
        },
        allowNull: false
      }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes_has_profissionais')
  }
}

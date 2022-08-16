'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.changeColumn('clientes_has_profissionais', 'preco_servico', { 
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false 
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('clientes_has_profissionais', 'preco_servico');
  }
};

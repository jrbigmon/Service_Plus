'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('profissionais', 'descricao', {
        type: Sequelize.DataTypes.STRING(800),
        allowNull: true
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('profissionais', 'descricao');
  }
};
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('clientes', 'avatar', {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: true,
        defaultValue: 'defaultAvatar.jpeg'
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('clientes', 'avatar');
  }
};

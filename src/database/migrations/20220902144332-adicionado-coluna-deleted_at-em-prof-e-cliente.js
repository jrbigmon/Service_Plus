'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('clientes', 'deleted_at', { 
      type: Sequelize.DataTypes.DATE,
      allowNull: true 
    });
    
    await queryInterface.addColumn('profissionais', 'deleted_at', { 
      type: Sequelize.DataTypes.DATE,
      allowNull: true 
    });
  },

  async down (queryInterface, Sequelize) {
    
  }
};

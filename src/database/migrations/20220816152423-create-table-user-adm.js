'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users_admins', { 
      id:{
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.DataTypes.STRING(300),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users_admins');
  }
};

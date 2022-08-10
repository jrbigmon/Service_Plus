'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('profissionais', 'avatar', {
      type: Sequelize.DataTypes.STRING(200),
      allowNull: true,
      defaultValue: 'defaultAvatar.jpeg'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('profissionais', 'avatar')
  }
}

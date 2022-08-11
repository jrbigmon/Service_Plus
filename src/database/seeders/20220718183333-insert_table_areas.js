'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    const areas = [
      {
        id: 1,
        nome: 'Eletricista'
      },
      {
        id: 2,
        nome: 'Encanador'
      },
      {
        id: 3,
        nome: 'Pintor'
      }
    ]

    await queryInterface.bulkInsert('areas', areas, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('areas', null, {})
  }
}

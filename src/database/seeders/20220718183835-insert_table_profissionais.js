'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    let users = []

    for(let i = 1; i<=5; i++){
      users.push({
        id: i,
        nome: `NomeTeste${i}`,
        sobrenome: `SobrenomeTeste${i}`,
        data_nascimento: '1990-05-01',
        cep: '01234567',
        telefone: `(11)9${(i.toString()).repeat(8)}`,
        email: `teste${i}@mail.com`,
        senha: bcrypt.hashSync('123456', 10),
        cpf: `${(i.toString()).repeat(8)}`,
        area_id: i <= 3 ? i : i - 2
      })
    }
    await queryInterface.bulkInsert('profissionais', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profissionais', null, {});
  }
};

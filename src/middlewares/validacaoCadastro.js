const { body } = require('express-validator')
const { Cliente, Profissional } = require('../database/models/index')

const validacaoCadastro = [
  body('nome').notEmpty().withMessage('Insira um nome!'),
  body('sobrenome').notEmpty().withMessage('Insira um sobrenome!'),
  body('dataNascimento').notEmpty().withMessage('Insira sua data de nascimento!'),
  body('cep').notEmpty().withMessage('Insira seu CEP!'),
  body('numero').notEmpty().withMessage('Insira o número da casa!'),
  body('telefone').notEmpty().withMessage('Insira seu telefone!'),
  body('email').notEmpty().withMessage('Insira um email válido!'),
  body('cpf').notEmpty().withMessage('Insira seu CPF!'),
  body('senha').notEmpty().withMessage('Insira uma senha!'),
  body('confirmeSenha').custom((value, { req }) => {
    if (value !== req.body.senha) {
      throw new Error('As senhas não conferem!')
    }
    return true
  }),
  body('email').custom(async (value, { req }) => {
    if (req.body.profissional) {
      const usuario = await Profissional.findOne({ where: { email: value } })
      if (usuario) {
        throw new Error('Credênciais já cadastradas!')
      }
    } else {
      const usuario = await Cliente.findOne({ where: { email: value } })
      if (usuario) {
        throw new Error('Credênciais já cadastradas!')
      }
    }

    return true
  }),
  body('cpf').custom(async (value, { req }) => {
    if (req.body.profissional) {
      const usuario = await Profissional.findOne({ where: { cpf: value } })
      if (usuario) {
        throw new Error('Credênciais já cadastradas!')
      }
    } else {
      const usuario = await Cliente.findOne({ where: { cpf: value } })
      if (usuario) {
        throw new Error('Credênciais já cadastradas!')
      }
    }

    return true
  })
]

module.exports = validacaoCadastro

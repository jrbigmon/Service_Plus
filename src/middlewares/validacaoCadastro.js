const {body} = require('express-validator')

const validacaoCadastro = [
    body('nome').notEmpty().withMessage('Insira um nome!'),
    body('sobrenome').notEmpty().withMessage('Insira um sobrenome!'),
    body('data_nascimeno').notEmpty().withMessage('Insira sua data de nascimento!'),
    body('cep').notEmpty().withMessage('Insira seu CEP!'),
    body('telefone').notEmpty().withMessage('Insira seu telefone!'),
    body('email').notEmpty().withMessage('Insira um email válido!'),
    body('cpf').notEmpty().withMessage('Insira seu CPF!'),
    body('senha').notEmpty().withMessage('Insira uma senha!'),
    body('confirmeSenha').custom((value, { req }) => {
        if (value !== req.body.senha) {
          throw new Error('As senhas não conferem!');
        }
        return true;
      }),
]

module.exports = validacaoCadastro;
const { Cliente, Profissional } = require('../database/models')
const bcrypt = require('bcryptjs')

const userVerifyExists = async (req, res, next) => {
    const { email, senha } = req.body
    const { usuario } = req.query

    if(usuario === "cliente"){
        const cliente = await Cliente.findOne({where: { email }})
        if (!cliente || !bcrypt.compareSync(senha, cliente.senha)){
            res.locals.errorValidation = "Tem erro nessa bagaça"
            return next()
        }
        return next()
    }
    if(usuario === "profissional"){
        const profissional = await Profissional.findOne({where: { email }})
        if (!profissional || !bcrypt.compareSync(senha, profissional.senha)){
            res.locals.errorValidation = "Tem erro nessa bagaça"
            return next()
        }
        return next()
    }
}

module.exports = userVerifyExists
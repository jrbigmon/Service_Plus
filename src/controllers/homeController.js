const { Cliente, Area, Profissional } = require('../database/models')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const cepRequest = require('../requests/cepRequest')

const homeController = {
  index: (req, res) => {
    return res.render('./home/home', {
      title: 'home'
    })
  },

  login: (req, res) => {
    const queryUsuario = req.query.usuario

    return res.render('./home/login', {
      title: 'login',
      queryUsuario
    })
  },

  loginProcess: async (req, res) => {
    const queryUsuario = req.query.usuario
    const { email, senha } = req.body

    if (queryUsuario === 'cliente') {
      const cliente = await Cliente.findOne({ where: { email }, raw: true })

      if (cliente && bcrypt.compareSync(senha, cliente.senha) && !cliente.deletedAt) {
        const endereco = await cepRequest.getCep(cliente.cep)

        delete cliente.senha

        Object.assign(cliente, {
          tipoUsuario: queryUsuario,
          endereco
        })

        req.session.usuario = cliente

        const lastUrl = req.session.lastUrl

        if(lastUrl) return res.redirect(lastUrl)
        
        return res.redirect(`/perfil/cliente/${cliente.id}/editar`)
      };

      return res.redirect('/login/?usuario=cliente')
    };

    if (queryUsuario === 'profissional') {
      const profissional = await Profissional.findOne({ where: { email }, raw: true })
    
      if (profissional && bcrypt.compareSync(senha, profissional.senha) && !profissional.deletedAt) {
        const endereco = await cepRequest.getCep(profissional.cep)

        Object.assign(profissional, {
          tipoUsuario: queryUsuario,
          endereco
        })

        req.session.usuario = profissional

        return res.redirect(`/perfil/profissional/${profissional.id}/editar`)
      }

      return res.redirect('/login/?usuario=profissional')
    }
  },

  cadastro: async (req, res) => {
    const areas = await Area.findAll()

    return res.render('./home/cadastro', {
      title: 'Cadastro',
      areas
    })
  },

  cadastroProcess: async (req, res) => {
    const areas = await Area.findAll()
    const errors = validationResult(req)

    if (errors.isEmpty()) {
      const {
        nome,
        sobrenome,
        dataNascimento,
        cep,
        numero,
        telefone,
        email,
        senha,
        cpf,
        areaId,
        profissional
      } = req.body

      if (profissional && areaId) {
        await Profissional.create({
          nome,
          sobrenome,
          dataNascimento,
          cep,
          telefone,
          email,
          senha: bcrypt.hashSync(senha, 10),
          cpf,
          areaId
        })
        return res.redirect('/login/?usuario=profissional')
      } else {
        await Cliente.create({
          nome,
          sobrenome,
          dataNascimento,
          cep,
          numero,
          telefone,
          email,
          senha: bcrypt.hashSync(senha, 10),
          cpf
        })
        return res.redirect('/login/?usuario=cliente')
      }
    }

    return res.render('./home/cadastro', {
      title: 'cadastro',
      errors: errors.mapped(),
      areas,
      old: req.body
    })
  },

  sobre: (req, res) => {
    return res.render('./home/sobre', {
      title: 'sobre'
    })
  },

  logout: (req, res) => {
    if (req.session.usuario) {
      req.session.destroy()
      delete res.locals.usuario
    }

    return res.redirect('/')
  }

}
module.exports = homeController

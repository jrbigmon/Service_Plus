const { Cliente, Profissional, ClienteHasProfissional } = require('../database/models')
const cepRequest = require('../requests/cepRequest')
const path = require('path')
const fs = require('fs')

const clienteController = {
  showProfissionais: async (req, res) => {
    let { area, order } = req.body

    order = order || 'ASC'
    area = area || ['1', '2', '3']

    const profissionais = await Profissional.findAll({
      where: { areaId: area },
      order: [['areaId', order]],
      include: 'area'
    })

    return res.render('./cliente/listaDeProf', {
      title: 'Lista de Profissionais',
      profissionais,
      area
    })
  },

  showProfissional: (req, res) => {
    return res.render('./profissional/resumoProfissional', { title: 'cartão profissional' })
  },

  showEdit: async (req, res) => {
    const { id } = req.params

    if (id != req.session.usuario.id) {
      return res.redirect('/')
    }
    const cliente = await Cliente.findByPk(id)

    return res.render('./cliente/editPerfilCliente', {
      title: cliente.nome,
      cliente
    })
  },

  edit: async (req, res) => {
    const { id } = req.params
    const { nome, sobrenome, cpf, cep, numero } = req.body
    const avatar = req.file

    const cliente = await Cliente.findByPk(id)

    let clienteUpdated

    const endereco = await cepRequest.getCep(cep)

    if (avatar) {
      const avatarAntigo = cliente.avatar

      const localFileAvatar = path.resolve('public', 'img', 'avatarPerfilCliente', avatarAntigo)

      fs.unlink(localFileAvatar, (err) => {
        err ? console.log(err) : console.log('Sucsses!')
      })

      clienteUpdated = { avatar: avatar.filename, nome, sobrenome, cpf, cep, numero }

      req.session.usuario = Object.assign({
        id,
        endereco,
        tipoUsuario: req.session.usuario.tipoUsuario,
        ...clienteUpdated
      })
    } else {
      clienteUpdated = { nome, sobrenome, cpf, cep, numero }

      req.session.usuario = Object.assign({
        id,
        avatar: cliente.avatar,
        endereco,
        tipoUsuario: req.session.usuario.tipoUsuario,
        ...clienteUpdated
      })
    }

    await Cliente.update(clienteUpdated, { where: { id } })

    return res.redirect('/')
  },

  delete: async (req, res) => {
    const { id } = req.params

    await Cliente.destroy({ where: { id } })

    return res.redirect('/')
  }

}

module.exports = clienteController

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

  resumeProfile: async (req, res) => {
    const { id } = req.params

    const profissional = await Profissional.findByPk(id, {
      include: 'area'
    })

    if (profissional) {
      return res.render('./profissional/resumoProfissional', { title: profissional.nome, profissional })
    }
    return res.redirect('/perfil/cliente/profissionais')
  },

  showProfissional: (req, res) => {
    return res.render('./profissional/resumoProfissional', { title: 'cartão profissional' })
  },

  showEdit: async (req, res) => {
    const { id } = req.params

    if (id === req.session.usuario.id) {
      const cliente = await Cliente.findByPk(id)

      return res.render('./cliente/editPerfilCliente', {
        title: cliente.nome,
        cliente
      })
    }

    return res.redirect('/')
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
  },

  solicitarOrcamento: async (req, res) => {
    const { descricaoServico, dataServico } = req.body
    const { id: idProfissional } = req.params
    const { id: idCliente } = req.session.usuario
    const { tipoUsuario } = req.session.usuario

    if (tipoUsuario !== 'cliente') {
      return res.redirect('/perfil/profissional/historico')
    }

    const solicitacao = {
      clienteId: parseInt(idCliente),
      profissionalId: parseInt(idProfissional),
      dataServico,
      precoServico: 0.00,
      descricaoServico,
      situacaoServicoId: 1
    }

    await ClienteHasProfissional.create(solicitacao)

    return res.redirect('/perfil/cliente/profissionais')
  }
}

module.exports = clienteController

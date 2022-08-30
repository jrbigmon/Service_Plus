const { Cliente, Profissional, ClienteHasProfissional } = require('../database/models')
const path = require('path')
const fs = require('fs')
const { Op } = require('sequelize')

const clienteController = {
  showProfissionais: async (req, res) => {
    let { area, order } = req.query
    
    order = order || 'ASC'
    area = area || ['1', '2', '3'] 
    
    const profissionais = await Profissional.findAll({
      where: { areaId: area },
      order: [['nome', order]],
      include: 'area'
    })

    return res.render('./cliente/listaDeProf', {
      title: 'Lista de Profissionais',
      profissionais,
      area
    })
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

    if (avatar) {
      const oldAvatar = cliente.avatar

      if(oldAvatar !== 'defaultAvatar.jpeg'){
        const localFileAvatar = path.resolve('public', 'img', 'avatarPerfilCliente', oldAvatar)
        
        fs.unlink(localFileAvatar, (err) => {
          err ? console.log(err) : console.log('success!')
        })
      }

      clienteUpdated = { avatar: avatar.filename, nome, sobrenome, cpf, cep, numero }

    } else {
      clienteUpdated = { nome, sobrenome, cpf, cep, numero }
    }

    await Cliente.update(clienteUpdated, { where: { id } })

    const clientAfterUpdate = await Cliente.findByPk(id, { raw: true })

    delete clientAfterUpdate.senha
    
    req.session.usuario = Object.assign(clientAfterUpdate, {
      tipoUsuario: 'cliente'
    })
    
    return res.redirect('/')
  },

  delete: async (req, res) => {
    const { id } = req.params

    await Cliente.destroy({ where: { id } })

    return res.redirect('/')
  },
  
  historicoServicos: async (req, res) => {
    const { id } = req.session.usuario;
    const situacaoServico = req.query.status || 2
    const precoMin = req.query.precoMin || '0'
    const precoMax = req.query.precoMax || '1000'
    const order = req.query.ordem || 'ASC'
    const data = req.query.data || ''
    
    const dadosServicos = await ClienteHasProfissional.findAll({
      where: {
        clienteId: id, 
        situacaoServicoId: parseInt(situacaoServico),
        precoServico: { [Op.between] : [precoMin, precoMax] },
        // dataServico: { [Op.gt] : data }
      }, 
      order: [['precoServico', order]],
      include: [
        {
          association: 'profissional',
          attributes: ['nome', 'sobrenome', 'avatar'],
        }, 
        {
          association: 'situacaoServico',
          attributes: ['estado']
        }, 
      ]
    })
    return res.render('./cliente/historicoServicos', {title: 'Histórico serviços', dadosServicos})
  }

}

module.exports = clienteController

const { Profissional, ClienteHasProfissional } = require('../database/models')
const fs = require('fs')
const path = require('path')
const { Op }= require('sequelize')

const profissionalController = {
  history: async (req, res) => {
    const { id } = req.session.usuario;
    const situacaoServico = req.query.status || 1
    const precoMin = req.query.precoMin || '0'
    const precoMax = req.query.precoMax || '1000'
    const order = req.query.ordem || 'ASC'
    const data = req.query.data || ''
    
    const dadosServicos = await ClienteHasProfissional.findAll({
      where: {
        profissionalId: id, 
        situacaoServicoId: parseInt(situacaoServico),
        precoServico: { [Op.between] : [precoMin, precoMax] },
        dataServico: { [Op.gt] : data }
      }, 
      order: [['dataServico', order]],
      include: [
        {
          association: 'situacaoServico',
          attributes: ['estado']
        },
        {
          association: 'cliente',
          attributes: ['nome', 'sobrenome', 'cep', 'numero', 'avatar']
        }
      ]
    })
    return res.render('./profissional/historicoServicos', {
      title: 'histórico de serviços',
      dadosServicos
    })
  },

  showProfile: async (req, res) => {
    const { id } = req.params

    const profissional = await Profissional.findByPk(id)

    return res.render('./profissional/perfilProfissional', { title: 'Perfil do profissional', profissional })
  },

  editProfile: async (req, res) => {
    const { id } = req.params
    const { nome, sobrenome, cpf, telefone, cep, descricao } = req.body
    const avatar = req.file

    const profissional = await Profissional.findByPk(id, { raw: true })

    if (!profissional) {
      return res.redirect('/login?usuario=profissional')
    }

    let profissionalEdit

    if (avatar) {
      profissionalEdit = { nome, sobrenome, cpf, telefone, cep, avatar: avatar.filename, descricao }

      const oldAvatar = profissional.avatar
      
      if(oldAvatar !== 'defaultAvatar.jpeg'){
        const localizacaoRelativa = path.resolve('public', 'img', 'avatarPerfilProfissional', oldAvatar)
        
        fs.unlink(localizacaoRelativa, (error) => {
          error ? console.log(error) : console.log('success!')
        })
      }

    } else {
      profissionalEdit = { nome, sobrenome, cpf, telefone, cep, descricao }
    }

    await Profissional.update(profissionalEdit, { where: { id } })

    const professionalAfterUpdate = await Profissional.findByPk(id, { raw: true })

    delete professionalAfterUpdate.senha

    req.session.usuario = Object.assign(professionalAfterUpdate, {
      tipoUsuario: 'profissional'
    })
    
    return res.redirect('/')
  },
  
  deleteProfile: async (req, res) => {
    const { id } = req.params

    await Profissional.destroy({ where: { id } })

    return res.redirect('/')
  }

}
module.exports = profissionalController

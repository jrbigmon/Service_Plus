const { ClienteHasProfissional, Profissional } = require('../database/models')

const servicoController = {
  viewOrcamento: async (req, res) => {
    const { id } = req.params

    const profissional = await Profissional.findByPk(id, {
      include: 'area'
    })

    if (profissional) {
      return res.render('./servico/solicitarOrcamento', { title: profissional.nome, profissional })
    }
    return res.redirect('/perfil/cliente/profissionais')
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
  },

  orcamentar: async (req, res) => {
    const { id } = req.params
    const { precoServico } = req.body
    const servicoSolicitado = await ClienteHasProfissional.findByPk(id)

    const servicoOcamentado = {
      ...servicoSolicitado,
      precoServico: parseFloat(precoServico),
      situacaoServicoId: 2
    }
    await ClienteHasProfissional.update(servicoOcamentado, { where: { id } })
    return res.json(servicoOcamentado)
  },

  aceitarServico: async (req, res) => {
    
  }
}

module.exports = servicoController

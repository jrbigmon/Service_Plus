const { ClienteHasProfissional, Profissional } = require('../database/models')

const servicoController = {
  viewOrcamentoByClient: async (req, res) => {
    const { id } = req.params

    const profissional = await Profissional.findByPk(id, {
      include: 'area'
    })

    if (profissional) {
      return res.render('./servico/solicitarOrcamento', { title: profissional.nome, profissional })
    }
    return res.redirect('/perfil/cliente/profissionais')
  },

  solicitarOrcamentoByClient: async (req, res) => {
    const { descricaoServico, dataServico } = req.body
    const { id: idProfissional } = req.params
    const { id: idCliente } = req.session.usuario
    const { tipoUsuario } = req.session.usuario

    if (tipoUsuario !== 'cliente') {
      return res.redirect('/perfil/profissional/historico')
    }
    console.log(dataServico)
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

  orcamentarByProfessional: async (req, res) => {
    const { id } = req.params
    const { precoServico } = req.body
    const servicoSolicitado = await ClienteHasProfissional.findByPk(id)
    if(!servicoSolicitado || servicoSolicitado.situacaoServicoId !== 1) return res.redirect('/')
    const servicoOcamentado = {
      ...servicoSolicitado,
      precoServico: parseFloat(precoServico),
      situacaoServicoId: 2
    }
    await ClienteHasProfissional.update(servicoOcamentado, { where: { id } })
    return res.redirect('/perfil/profissional/historico')
  },
  // view do cliente 
  aceitarServicoOrcadoClient: async (req, res) => {
    const { id } = req.params
    const servicoOrcamentado = await ClienteHasProfissional.findByPk(id)
    if(!servicoOrcamentado || servicoOrcamentado.situacaoServicoId !== 2) return res.redirect('/')
    const servicoUpdated = {
      ...servicoOrcamentado,
      situacaoServicoId: 3
    }
    await ClienteHasProfissional.update(servicoUpdated, { where: { id } })
    return res.redirect('/perfil/cliente/profissionais')
  },

  servicoExecutadoByProfissional: async (req, res) =>{
    const { id } = req.params
    const servicoRealizado = await ClienteHasProfissional.findByPk(id)
    if (!servicoRealizado || servicoRealizado.situacaoServicoId !== 3) return res.redirect('/')
    const servicoUpdated = {
      ...servicoRealizado,
      situacaoServicoId: 4
    }
    await ClienteHasProfissional.update(servicoUpdated, { where: { id } })
    return res.redirect('/')
  },

  cancelarServico: async (req, res) => {
    const { id } = req.params
    const { descricaoServico } = req.body
    const servicoOrcamentado = await ClienteHasProfissional.findByPk(id)
    if(!servicoOrcamentado) return res.redirect('/')
    const servicoUpdated = {
      ...servicoOrcamentado,
      descricaoServico,
      situacaoServicoId: 5
    }
    await ClienteHasProfissional.update(servicoUpdated, { where: { id } })
    return res.redirect('/')
  }
}

module.exports = servicoController

const clienteController = {
    index: (req, res) => res.render ('/perfilcliente', {title: 'Perfil do cliente'}),
    showCadastrar: (req, res) => res.render ('cadastro-perfil')
}

module.exports = clienteController;
const clienteController = {
    index: (req, res) => res.render ('perfilCliente', {title: 'Perfil do cliente'}),
    showCadastrar: (req, res) => res.render ('perfilCliente', {title: 'Perfil do cliente'})
}

module.exports = clienteController;
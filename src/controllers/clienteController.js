const clienteController = {
    index: (req, res) => res.render ('/perfilcliente', {title: 'Perfil do cliente'}),
    showCadastrar: (req, res) => res.render ('perfilcliente/cadastrar', {title: 'Perfil do cliente'})
}

module.exports = clienteController;
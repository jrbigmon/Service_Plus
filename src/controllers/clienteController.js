const clienteController = {
    index: (req, res) => res.render ('./cliente/perfilCliente', {title: 'Perfil do cliente'}),
    showCadastrar: (req, res) => res.render ('./cliente/perfilCliente', {title: 'Perfil do cliente'}),
    showBuscar: (req, res) => res.render ('./cliente/paginaBusca', {title:'Buscar profissional'})
}

module.exports = clienteController;
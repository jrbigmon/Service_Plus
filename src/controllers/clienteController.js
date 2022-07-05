const clienteController = {
    index: (req, res) => res.render ('./cliente/perfilCliente', {title: 'Perfil do cliente'}),
    showCadastrar: (req, res) => res.render ('./cliente/perfilCliente', {title: 'Perfil do cliente'}),
    showBuscar: (req, res) => res.render ('./cliente/paginaBusca', {title:'Buscar profissional'}),
    showProfissionais: (req, res) => { res.render('./client/listaDeProf', {title:'Lista de Profissionais'})},
    showProfissional: (req, res) => { res.render('./profissional/resumoProfissional', {title: 'cartão profissional'})}
}

module.exports = clienteController;
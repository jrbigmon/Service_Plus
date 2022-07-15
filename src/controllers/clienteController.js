const {Cliente} = require('../database/models');

const clienteController = {
    index: async (req, res) => {
        const {id} = req.params
        const cliente = await Cliente.findByPk(id)
        res.render ('./cliente/perfilCliente', {title: 'Perfil do cliente', cliente})
    },

    showCadastrar: (req, res) => res.render ('./cliente/perfilCliente', {title: 'Perfil do cliente'}),
    showBuscar: (req, res) => res.render ('./cliente/paginaBusca', {title:'Buscar profissional'}),
    showProfissionais: (req, res) => { res.render('./cliente/listaDeProf', {title:'Lista de Profissionais'})},
    showProfissional: (req, res) => { res.render('./profissional/resumoProfissional', {title: 'cartão profissional'})}
}

module.exports = clienteController;
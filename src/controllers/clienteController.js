const {Cliente} = require('../database/models');

const clienteController = {
    showBuscar: (req, res) => { 
        const {area} = req.body;
        res.render ('./cliente/paginaBusca', {title:'Buscar profissional'})
    },
    showProfissionais: (req, res) => { res.render('./cliente/listaDeProf', {title:'Lista de Profissionais'})},
    showProfissional: (req, res) => { res.render('./profissional/resumoProfissional', {title: 'cartão profissional'})}
}

module.exports = clienteController;
const { Cliente, Profissional } = require('../database/models');
const { Op } = require('sequelize')

const clienteController = {
    showBuscar: (req, res) => { 
        res.render ('./cliente/paginaBusca', {title:'Buscar profissional'})
    },

    showProfissionais: async (req, res) => { 
        let {area} = req.body;
        let {order} = req.body;
        order == undefined ? order = 'ASC' : order
        const profissionais = await Profissional.findAll({
            where: { area_id: area },
            order: [['area_id', order]],
            include: 'area' 
        })
        res.render('./cliente/listaDeProf', {title:'Lista de Profissionais', profissionais, area})
    },

    showProfissional: (req, res) => { 
        res.render('./profissional/resumoProfissional', {title: 'cartão profissional'})
    }
}

module.exports = clienteController;
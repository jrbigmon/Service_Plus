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
    },

    showEdit: async (req, res) => {
        const {id} = req.params;
        const cliente  = await Cliente.findByPk(id);
        return res.render('./cliente/perfilCliente', {title: cliente.nome, cliente})
    },

    edit: async (req, res) => {
        const {nome, sobrenome, cpf, cep} = req.body;
        const {id} = req.params;
        await Cliente.update({
            nome, 
            sobrenome, 
            cpf, 
            cep
        },
        {
            where: { id }
        })
        return res.redirect('/perfil/cliente/buscar')
    },

    delete: async (req, res) => {
        const {id} = req.params;
        await Cliente.destroy({ where: { id } });
        return res.redirect('/');
    }
}

module.exports = clienteController;
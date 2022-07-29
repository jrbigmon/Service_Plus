const { Cliente, Profissional } = require('../database/models');
const cepRequest = require('../requests/cepAPI/cepRequest')

const clienteController = {
    showBuscar: (req, res) => { 
        res.render ('./cliente/paginaBusca', {title:'Buscar profissional'});
    },

    showProfissionais: async (req, res) => { 
        let {area, order} = req.body;

        order == undefined ? order = 'ASC' : order;
        area == undefined ? area = ['1', '2', '3'] : area

        const profissionais = await Profissional.findAll({
            where: { area_id: area },
            order: [['area_id', order]],
            include: 'area' 
        });
        
        res.render('./cliente/listaDeProf', {
            title:'Lista de Profissionais', 
            profissionais, 
            area 
        });
    },

    showProfissional: (req, res) => { 
        res.render('./profissional/resumoProfissional', {title: 'cartão profissional'});
    },

    showEdit: async (req, res) => {
        const {id} = req.params;

        if(id == req.session.usuario.id){
            const cliente  = await Cliente.findByPk(id);
            return res.render('./cliente/editPerfilCliente', {
                title: cliente.nome, 
                cliente
            });
        }

        return res.redirect('/perfil/cliente/buscar');
    },

    edit: async (req, res) => {
        const {id} = req.params;

        const {email, nome, sobrenome, cpf, cep, numero} = req.body;

        let clienteUpdated = {nome, sobrenome, cpf, cep, numero};

        await Cliente.update(clienteUpdated, { where: { id } });

        const endereco = await cepRequest.getCep(cep);

        Object.assign(clienteUpdated, {
            id,
            email,
            endereco: endereco.logradouro
        })
        req.session.usuario = clienteUpdated

        return res.redirect('/perfil/cliente/buscar');
    },

    delete: async (req, res) => {
        const {id} = req.params;

        await Cliente.destroy({ where: { id } });

        return res.redirect('/');
    }
}

module.exports = clienteController;
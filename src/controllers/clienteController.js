const { Cliente, Profissional, ClienteHasProfissional } = require('../database/models');
const cepRequest = require('../requests/cepRequest')

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

    resumeProfile: async (req, res) => {
        const { id } = req.params;

        const profissional = await Profissional.findByPk(id, {
            include: 'area'
        });

        if(profissional) {
            console.log(profissional.area.nome)
            return res.render('./profissional/resumoProfissional', {title: profissional.nome, profissional});
        }
        return res.redirect('/perfil/cliente/profissionais');

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

        const {nome, sobrenome, cpf, cep, numero} = req.body;
        
        const { email } = req.session;
        
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
    },

    solicitarOrcamento: async (req, res) => {
        const { descricao_servico, data_servico } = req.body;
        const { id: idProfissional } = req.params; 
        const { id: idCliente} = req.session.usuario;

        let solicitacao = {
            cliente_id: parseInt(idCliente),
            profissional_id: parseInt(idProfissional),
            data_servico,
            preco_servico: 0.00,
            descricao_servico,
            situacao_servico_id: 1
        } 
        console.log(solicitacao)
        await ClienteHasProfissional.create(solicitacao);

        return res.redirect('/perfil/cliente/profissionais');

    }
}

module.exports = clienteController;
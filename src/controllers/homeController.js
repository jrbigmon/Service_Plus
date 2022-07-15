const {Cliente, Area, Profissional} = require('../database/models');

const homeController = {
    index: (req, res) => {
        res.render('./home/home', {
            title: 'home'
        })
    },

    login: (req, res) => {
        const {usuario} = req.query
        res.render('./home/login', {
            title: 'login',
            usuario
        })
    },

    loginProcess: async (req, res) => {
        const {usuario} = req.query;
        const { email, senha } = req.body;
        if(usuario == 'cliente'){
            const cliente = await Cliente.findOne({
                where: {
                    email,
                    senha
                }
            })
            if (cliente) {
                delete cliente.senha;
                return res.render('./cliente/perfilCliente', {
                    title: 'Perfil',
                    cliente
                })
            } else {
                return res.redirect('/login/?usuario=cliente');
            }
        } else if(usuario == 'profissional'){
            const profissional = await Profissional.findOne({
                where: {
                    email,
                    senha
                }
            })
            if (profissional) {
                delete profissional.senha;
                return res.render('./profissional/perfilProfissional', {
                    title: 'Perfil',
                    profissional
                })
            } else {
                return res.redirect('/login/?usuario=profissional');
            }
        }
    },

    cadastro: async (req, res) => {
        const areas = await Area.findAll();
        return res.render('./home/cadastro', {
            title: 'Cadastro',
            areas
        })
    },

    cadastroProcess: async (req, res) => {
        const {
            nome,
            sobrenome,
            data_nascimento,
            cep,
            telefone,
            email,
            senha,
            cpf,
            area_id,
            profissional
        } = req.body;

        if (profissional && area_id) {
            await Profissional.create({
                nome,
                sobrenome,
                data_nascimento,
                cep,
                telefone,
                email,
                senha,
                cpf,
                area_id
            })
        } else {
            await Cliente.create({
                nome,
                sobrenome,
                data_nascimento,
                cep,
                telefone,
                email,
                senha,
                cpf
            })
        }

        return res.redirect('/login')
    },

    sobre: (req, res) => {
        res.render('./home/sobre', {
            title: 'sobre'
        })
    },

}
module.exports = homeController;
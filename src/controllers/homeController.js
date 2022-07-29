const {Cliente, Area, Profissional} = require('../database/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const cepRequest = require('../requests/cepAPI/cepRequest');

const homeController = {
    index: (req, res) => {
        res.render('./home/home', {
            title: 'home'
        });
    },

    login: (req, res) => {
        const {usuario} = req.query;

        res.render('./home/login', {
            title: 'login',
            usuario
        });
    },

    loginProcess: async (req, res) => {
        const {usuario} = req.query;
        const { email, senha } = req.body;

        if(usuario == 'cliente'){
            const cliente = await Cliente.findOne({ where: {email}, raw: true });

            if (cliente && bcrypt.compareSync(senha, cliente.senha)) {
                const endereco = await cepRequest.getCep(cliente.cep.toString());

                delete cliente.senha;

                const dadosPerfil = Object.assign({
                    ...cliente,
                    endereco: endereco.logradouro
                });

                req.session.usuario = dadosPerfil;

                return res.redirect(`/perfil/cliente/${cliente.id}/editar`);
            };

            return res.redirect('/login/?usuario=cliente');
        }; 

        if(usuario == 'profissional'){
            const profissional = await Profissional.findOne({ where: {email}, raw: true });
            
            if (profissional && bcrypt.compareSync(senha, profissional.senha)) {
                const endereco = await cepRequest.getCep(profissional.cep);

                const dadosPerfil = Object.assign({
                   ...profissional,
                   endereco: endereco.logradouro
                });

                req.session.usuario = dadosPerfil;

                return res.redirect('/perfil/profissional');
            }

            return res.redirect('/login/?usuario=profissional');
        }
    },

    cadastro: async (req, res) => {
        const areas = await Area.findAll();

        return res.render('./home/cadastro', {
            title: 'Cadastro',
            areas
        });
    },

    cadastroProcess: async (req, res) => {
        const areas = await Area.findAll();
        const errors = validationResult(req); 
        
        if(errors.isEmpty()) {
            const {
                nome,
                sobrenome,
                data_nascimento,
                cep,
                numero,
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
                    senha: bcrypt.hashSync(senha, 10),
                    cpf,
                    area_id
                });
            } else {
                await Cliente.create({
                    nome,
                    sobrenome,
                    data_nascimento,
                    cep,
                    numero,
                    telefone,
                    email,
                    senha: bcrypt.hashSync(senha, 10),
                    cpf
                });
            }
        
            return res.redirect('/');
        }

        return res.render('./home/cadastro', {
            title:'cadastro', 
            errors: errors.mapped(), 
            areas, 
            old: req.body
        });
    },
    
    sobre: (req, res) => {
        res.render('./home/sobre', {
            title: 'sobre'
        });
    },
    
}
module.exports = homeController;
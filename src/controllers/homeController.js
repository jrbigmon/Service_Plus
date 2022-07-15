const {Cliente} = require('../database/models');

const homeController = {
    index: (req, res) => { 
        res.render('./home/home', {title: 'home'} ) 
    },

    login: (req, res) => { 
        res.render('./home/login', {title: 'login'} ) 
    },
    loginProcess: async (req, res) => {
        const {email, senha} = req.body;
        const cliente = await Cliente.findOne({
            where: {email, senha}
        })
        
        if(cliente) {
            delete cliente.senha;
            return res.render('./cliente/perfilCliente', {title: 'Perfil', cliente})
        }
        else{
            return res.redirect('/login');
        }
    },

    sobre: (req, res) => { res.render('./home/sobre', {title: 'sobre'} ) },

}
module.exports = homeController;
const { Profissional } = require('../database/models');
const fs = require('fs');
const path = require('path');

const profissionalController = {
    history: (req, res) => {
        return res.render('./profissional/historicoServicos', {title: 'histórico de serviços'});
    },
    showProfile: async (req, res) => {
        const {id} = req.params;

        const profissional = await Profissional.findByPk(id);

        return res.render('./profissional/perfilProfissional', {title: 'Perfil do profissional', profissional});
    },
    editProfile: async (req, res) => {
        const {id} = req.params;
        const {nome, sobrenome, cpf, telefone, cep, descricao} = req.body;
        const avatar = req.file;

        const profissional = await Profissional.findByPk(id, {raw: true});

        if(!profissional){
            return res.redirect('/login?usuario=profissional');
        } 

        let profissionalEdit;

        if(avatar) {
            profissionalEdit = {nome, sobrenome, cpf, telefone, cep, avatar: avatar.filename, descricao};

            const oldAvatar = profissional.avatar;
            console.log(oldAvatar)

            const localizacaoRelativa = path.resolve('public', 'img', 'avatarPerfilProfissional', oldAvatar);

            fs.unlink(localizacaoRelativa, (error) => {
                error ? console.log(error) : console.log('Sucsess!')
            })
        } else {
            profissionalEdit = {nome, sobrenome, cpf, telefone, cep, descricao};
        }

        await Profissional.update(profissionalEdit, { where: { id } })

        return res.redirect('/')
    },
    deleteProfile: async (req, res) => {
        const {id} = req.params;

        await Profissional.destroy({ where: { id } });

        return res.redirect('/')
    }
   
}
module.exports = profissionalController;
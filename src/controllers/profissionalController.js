const { Profissional } = require('../database/models');

const profissionalController = {
    history: (req, res) => {
        res.render('./profissional/historicoServicos', {title: 'histórico de serviços'});
    },

   
}
module.exports = profissionalController;
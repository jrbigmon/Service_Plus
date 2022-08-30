const moment = require('moment')
const { ClienteHasProfissional } = require('../database/models')
const { Op } = require('sequelize')

const changeStatusServiceAuto = async (req, res, next) => {
    const dataAtual = moment().format('YYYYMMDD')

    if(req.session.countUpdateStatusService) return next()

    const servicos = await ClienteHasProfissional.findAll({
        where: {
            situacaoServicoId: { [Op.ne]: [4, 5] }
        }
    })
    
    if(servicos.length < 1) {
        req.session.countUpdateStatusService = 'Já verificado nessa sessão!'
        return next()
    }
    
    for (let servico of servicos){
        const dataServico = servico.dataServico

        const dataServicoFormat = moment(dataServico, 'YYYY-MM-DD').format('YYYYMMDD')

        if(dataServicoFormat - dataAtual < 0){
            const servicoAtualizado = {
                ...servico,
                descricaoServico: 'Cancelado por data limite excedida.',
                situacaoServicoId: 5
            }

            ClienteHasProfissional.update(servicoAtualizado, {where: {id: servico.id}}) 
        }
    }

    req.session.countUpdateStatusService = 'Já verificado nessa sessão!'

    return next()
}
module.exports = changeStatusServiceAuto
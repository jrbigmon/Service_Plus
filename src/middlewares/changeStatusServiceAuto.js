const moment = require('moment')
const { ClienteHasProfissional } = require('../database/models')

const dataAtual = moment().format('YYYYMMDD')

const changeStatusServiceAuto = async (req, res, next) => {
    if(req.session.countUpdateStatusService) return next()

    const servicos = await ClienteHasProfissional.findAll()

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
const moment = require('moment')
const { ClienteHasProfissional } = require('./src/database/models')

const getDate = async () => {
  let servico = await ClienteHasProfissional.findByPk(3)
  
  let dataServico = servico.dataServico
  
  console.log(dataServico)

  let dataAtual = moment().format('YYYYMMDD')

  let dataServicoFormatada = moment(dataServico, 'YYYY-MM-DD').format('YYYYMMDD')
  
  console.log(dataServicoFormatada - dataAtual)

  return 0
}
getDate()


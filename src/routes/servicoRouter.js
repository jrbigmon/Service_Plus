const express = require('express')
const servicoController = require('../controllers/servicoController')
const router = express.Router()
const auth = require('../middlewares/auth')

router.use(auth)
router.get('/servicos/:id/solicitar', servicoController.viewOrcamentoByClient)
router.post('/servicos/:id/solicitar', servicoController.solicitarOrcamentoByClient)
router.put('/servicos/:id/orcamentar', servicoController.orcamentarByProfessional)
router.put('/servicos/:id/finalizar', servicoController.servicoExecutadoByProfissional)
router.put('/servicos/:id/aceitar', servicoController.aceitarServicoOrcadoClient)
router.put('/servicos/:id/cancelar', servicoController.cancelarServico)
module.exports = router

const express = require('express')
const servicoController = require('../controllers/servicoController')
const auth = require('../middlewares/auth')
const router = express.Router()

router.use(auth)
router.get('/perfil/cliente/profissionais/:id/resumo', servicoController.viewOrcamento)
router.post('/perfil/cliente/profissionais/:id/resumo', servicoController.solicitarOrcamento)

router.post('/perfil/profissional/historico/:id/orcamentar', servicoController.orcamentar)
module.exports = router

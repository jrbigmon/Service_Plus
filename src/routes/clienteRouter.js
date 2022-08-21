const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const clienteController = require('../controllers/clienteController')
const storageAvatar = require('../middlewares/storageAvatar')

router.get('/perfil/cliente/profissionais', clienteController.showProfissionais)
router.post('/perfil/cliente/profissionais', clienteController.showProfissionais)

router.use(auth)

router.get('/perfil/cliente/historico', clienteController.historicoServicos);
router.post('/perfil/cliente/historico', clienteController.historicoServicos);

router.get('/perfil/cliente/:id/editar', clienteController.showEdit)
router.put('/perfil/cliente/:id/editar', storageAvatar('avatarPerfilCliente').single('avatar'), clienteController.edit)

router.delete('/perfil/cliente/:id/deletar', clienteController.delete)

module.exports = router

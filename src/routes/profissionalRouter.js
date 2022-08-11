const profissionalController = require('../controllers/profissionalController')
const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const storageAvatar = require('../middlewares/storageAvatar')

// router.use(auth);

router.get('/perfil/profissional/historico', profissionalController.history)

router.get('/perfil/profissional/:id/editar', profissionalController.showProfile)
router.put('/perfil/profissional/:id/editar', storageAvatar('avatarPerfilProfissional').single('avatar'), profissionalController.editProfile)

router.delete('/perfil/profissional/:id/delete', profissionalController.deleteProfile)

module.exports = router

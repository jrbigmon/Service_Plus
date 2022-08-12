const homeController = require('../controllers/homeController')
const express = require('express')
const router = express.Router()
const validacaoCadastro = require('../middlewares/validacaoCadastro')
const userVerifyExists = require('../middlewares/userVerifyExists')

router.get('/', homeController.index)

router.get('/login/:usuario?', homeController.login)
router.post('/login/:usuario?', userVerifyExists, homeController.loginProcess)

router.get('/cadastro', homeController.cadastro)
router.post('/cadastro', validacaoCadastro, homeController.cadastroProcess)

router.get('/sobre', homeController.sobre)

router.get('/logout', homeController.logout)

module.exports = router

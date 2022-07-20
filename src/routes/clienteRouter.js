const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const clienteController = require ('../controllers/clienteController')

router.get('/perfil/cliente', clienteController.index);
router.get('/perfil/cliente/cadastrar', clienteController.showCadastrar);
router.get('/perfil/cliente/buscar', clienteController.showBuscar);
router.get('/perfil/cliente/profissionais', auth, clienteController.showProfissionais);
router.get('/perfil/cliente/profissional/:id', auth, clienteController.showProfissional); // arrumar rota: '/perfil/cliente/profissional/:id'

module.exports = router;
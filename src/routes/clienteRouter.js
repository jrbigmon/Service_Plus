const express = require('express');
const router = express.Router();

const clienteController = require ('../controllers/clienteController')

router.get('/perfil/cliente', clienteController.index);
router.get('/perfil/cliente/cadastrar', clienteController.showCadastrar);
router.get('/perfil/cliente/buscar', clienteController.showBuscar);
router.get('/perfil/cliente/profissionais', clienteController.showProfissionais);

module.exports = router;
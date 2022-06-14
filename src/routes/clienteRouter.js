const express = require('express');
const router = express.Router();

const clienteController = require ('../controllers/clienteController')

router.get('/perfilcliente', clienteController.index);
router.get('/perfilcliente/cadastrar', clienteController.showCadastrar)

module.exports = router;
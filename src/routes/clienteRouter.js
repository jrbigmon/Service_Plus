const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const clienteController = require ('../controllers/clienteController')

router.use(auth);
router.get('/perfil/cliente/buscar', clienteController.showBuscar);
router.get('/perfil/cliente/profissionais', clienteController.showProfissionais);
router.get('/perfil/cliente/profissional/:id', clienteController.showProfissional); 

module.exports = router;
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const clienteController = require ('../controllers/clienteController');

router.use(auth);

router.get('/perfil/cliente/:id/editar', clienteController.showEdit);
router.put('/perfil/cliente/:id/editar', clienteController.edit);

router.delete('/perfil/cliente/:id/deletar', clienteController.delete);

router.get('/perfil/cliente/buscar', clienteController.showBuscar);

router.post('/perfil/cliente/profissionais', clienteController.showProfissionais);
router.get('/perfil/cliente/profissionais', clienteController.showProfissionais);


router.get('/cliente/profissional/:id', clienteController.showProfissional); 

module.exports = router;
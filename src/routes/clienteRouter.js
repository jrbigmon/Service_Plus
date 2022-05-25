const express = require('express');
const router = express.router();

const clienteController = require ('../controllers/clienteController')

router.get('/perfilcliente', clienteController.index);
router.post ('/perfilcliente', (req, res) => res.send (''));
router.put ('/perfilcliente/:id', (req, res) => res.send (''));
router.delete ('/perfilcliente/:id', (req, res) => res.send (''));

module.exports = router;
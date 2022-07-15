const homeController = require('../controllers/homeController');
const express = require('express');
const router = express.Router();

router.get('/', homeController.index);

router.get('/login/:usuario?', homeController.login);
router.post('/login/:usuario?', homeController.loginProcess);

router.get('/cadastro', homeController.cadastro);
router.post('/cadastro', homeController.cadastroProcess);

router.get('/sobre', homeController.sobre);

module.exports = router;
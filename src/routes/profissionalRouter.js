const profissionalController = require('../controllers/profissionalController');
const express = require('express');
const router = express.Router();

router.get('/perfil/profissional/historico', profissionalController.history);

module.exports = router;
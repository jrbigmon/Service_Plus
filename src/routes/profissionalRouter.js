const profissionalController = require('../controllers/profissionalController');
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

// router.use(auth);

router.get('/perfil/profissional/historico', profissionalController.history);

module.exports = router;
const profissionalController = require('../controllers/profissionalController');
const express = require('express');
const router = express.Router();

router.get('/profissionais', profissionalController.show);

module.exports = router;
const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.get('/profissionais', userController.show);

module.exports = router;
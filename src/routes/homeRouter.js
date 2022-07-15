const homeController = require('../controllers/homeController');
const express = require('express');
const router = express.Router();

router.get('/', homeController.index)
router.get('/login', homeController.login)
router.post('/login', homeController.loginProcess)
router.get('/sobre', homeController.sobre)

module.exports = router;
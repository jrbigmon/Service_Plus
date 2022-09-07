const express = require('express');
const router = express.Router()
const professionalApiController = require('../../controllers/controllersApi/profissionalController')

router.get('/api/professionals', professionalApiController.getAllProfessional)

module.exports = router
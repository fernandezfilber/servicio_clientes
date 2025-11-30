const express = require('express');
const router = express.Router();
const personaController = require('../Controllers/Cliente.controller');

// Obtener todos los clientes
router.get('/edad/:year', personaController.calcularEdad);
router.get('/saludar/:mensaje', personaController.saludar);
router.get('/imc/:peso/:talla', personaController.calcularIMC)
router.post('/sumar', personaController.suma);
router.get('/validar/:edad',personaController.validarEdad)

module.exports = router;
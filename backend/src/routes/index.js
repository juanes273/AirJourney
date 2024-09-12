const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightsController');
const loginController = require('../controllers/userController')
const iaController = require('../controllers/iaController')

// Ruta para obtener vuelos
router.get('/flights', flightController.getFlights);
//Ruta para login
router.post('/login', loginController.loginUser);
//Ruta para registro
router.post('/register', loginController.registerUser);
//Ruta para comprar vuelos
router.post('/buy', flightController.comprarVuelo)
//Ruta para itinerario generado por IA
router.post('/generateItinerary', iaController.getGroqChatCompletion)

module.exports = router;

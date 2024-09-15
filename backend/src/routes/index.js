const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightsController');
const loginController = require('../controllers/userController')
const iaController = require('../controllers/iaController')

// Ruta para obtener vuelos
router.get('/flights', flightController.getFlights);
//Ruta para obtener detalles del vuelo
router.get('/flights/:id', flightController.getVueloById)
//Ruta para login
router.post('/login', loginController.loginUser);
//Ruta para registro
router.post('/register', loginController.registerUser);
//Ruta para comprar vuelos
router.post('/buy', flightController.comprarVuelo)
//Ruta para itinerario generado por IA
router.post('/generateItinerary', iaController.getGroqChatCompletion)
//Ruta para cancelar vuelo
router.post('/cancel', flightController.eliminarCompraVuelo)


module.exports = router;

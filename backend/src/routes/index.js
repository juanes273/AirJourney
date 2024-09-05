const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightsController');

// Ruta para obtener vuelos
router.get('/flights', flightController.getFlights);

module.exports = router;

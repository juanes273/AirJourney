const db = require('../config/firebase');

// Controlador para obtener los vuelos
exports.getFlights = async (req, res) => {
    try {
      // Referencia a la colección 'vuelos'
      const flightsSnapshot = await db.collection('vuelos').get();
  
      // Verificamos si hay documentos en la colección
      if (flightsSnapshot.empty) {
        return res.status(404).json({ message: 'No se encontraron vuelos' });
      }
  
      // Convertimos los documentos en un array de datos
      const flights = [];
      flightsSnapshot.forEach(doc => {
        flights.push({
          id: doc.id,
          ...doc.data()  // Extraemos la data de cada documento
        });
      });
  
      // Respondemos con los vuelos obtenidos
      res.status(200).json({ flights });
  
    } catch (error) {
      console.error('Error al obtener vuelos:', error);
      res.status(500).json({ message: 'Error al obtener vuelos', error });
    }
  };
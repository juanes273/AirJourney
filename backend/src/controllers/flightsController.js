const {db, fieldValue} = require('../config/firebase');

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

  exports.comprarVuelo = async (req, res) => {
    const { usuarioId, vueloId } = req.body;
  
    if (!usuarioId || !vueloId) {
      return res.status(400).send('usuarioId y vueloId son requeridos');
    }
  
    try {
      const usuarioRef = db.collection('usuarios').doc(usuarioId);
      const vueloRef = db.collection('vuelos').doc(vueloId);
  
      // Comprobar si el usuario existe
      const usuarioDoc = await usuarioRef.get();
      if (!usuarioDoc.exists) {
        return res.status(404).send('Usuario no encontrado');
      }
  
      // Comprobar si el vuelo existe
      const vueloDoc = await vueloRef.get();
      if (!vueloDoc.exists) {
        return res.status(404).send('Vuelo no encontrado');
      }
  
      // Actualizar el documento del usuario con el vuelo comprado
      await usuarioRef.update({
        vuelosComprados: fieldValue.arrayUnion(vueloRef)
      });
  
      return res.status(200).send('Vuelo agregado al usuario');
    } catch (error) {
      console.error('Error al comprar vuelo:', error);
      return res.status(500).send('Error al procesar la compra del vuelo');
    }
  };


  exports.eliminarCompraVuelo = async (req, res) => {
    const { usuarioId, vueloId } = req.body;
  
    if (!usuarioId || !vueloId) {
      return res.status(400).send('usuarioId y vueloId son requeridos');
    }
  
    try {
      const usuarioRef = db.collection('usuarios').doc(usuarioId);
      const vueloRef = db.doc(`vuelos/${vueloId}`); // Obtener referencia del documento de vuelo
  
      // Comprobar si el usuario existe
      const usuarioDoc = await usuarioRef.get();
      if (!usuarioDoc.exists) {
        return res.status(404).send('Usuario no encontrado');
      }
  
      // Comprobar si el vuelo existe
      const vueloDoc = await vueloRef.get();
      if (!vueloDoc.exists) {
        return res.status(404).send('Vuelo no encontrado');
      }
  
      // Eliminar la referencia del vuelo de la lista de vuelosComprados
      await usuarioRef.update({
        vuelosComprados: fieldValue.arrayRemove(vueloRef) // Eliminar la referencia del vuelo
      });
  
      return res.status(200).send('Vuelo cancelado con exito');
    } catch (error) {
      console.error('Error al eliminar vuelo:', error);
      return res.status(500).send('Error al procesar la eliminación del vuelo');
    }
  };
  
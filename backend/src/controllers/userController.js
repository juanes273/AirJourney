const { db } = require('../config/firebase');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET; // Asegúrate de definir esta clave en tu archivo .env

// Registrar un nuevo usuario
exports.registerUser = async (req, res) => {
    const { email, password, nombre } = req.body;
  
    try {
      // Hashear la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Almacenar el usuario en Firestore con ID automático
      const newUserRef = await db.collection('usuarios').add({
        email: email,
        password: hashedPassword,
        nombre: nombre,
        createdAt: new Date(),
        vuelosComprados: []
      });
  
      res.status(201).json({
        message: 'User registered successfully',
        userId: newUserRef.id, // ID generado automáticamente
      });
    } catch (error) {
      res.status(400).json({
        message: 'Error registering user',
        error: error.message,
      });
    }
  };

// Autenticar un usuario y generar un token
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Buscar el usuario por email en Firestore
      const userQuerySnapshot = await db.collection('usuarios').where('email', '==', email).get();
  
      if (userQuerySnapshot.empty) {
        return res.status(401).json({
          message: 'Invalid email or password',
        });
      }
  
      const userDoc = userQuerySnapshot.docs[0];
      const user = userDoc.data();
  
      // Comparar la contraseña
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({
          message: 'Invalid email or password',
        });
      }
  
      // Generar un token que incluya el ID del usuario
      const token = jwt.sign({ userId: userDoc.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({
        message: 'Login successful',
        token: token,
      });
    } catch (error) {
      res.status(401).json({
        message: 'Login failed',
        error: error.message,
      });
    }
  };
  
  exports.obtenerVuelosComprados = async (req, res) => {
    const { usuarioId } = req.body;
  
    if (!usuarioId) {
      return res.status(400).send('usuarioId es requerido');
    }
  
    try {
      const usuarioRef = db.collection('usuarios').doc(usuarioId);
  
      // Comprobar si el usuario existe
      const usuarioDoc = await usuarioRef.get();
      if (!usuarioDoc.exists) {
        return res.status(404).send('Usuario no encontrado');
      }
  
      // Obtener los vuelos comprados (referencias)
      const usuarioData = usuarioDoc.data();
      const vuelosComprados = usuarioData.vuelosComprados || [];
  
      // Comprobar si el usuario tiene vuelos comprados
      if (vuelosComprados.length === 0) {
        return res.status(200).send('El usuario no tiene vuelos comprados');
      }
  
      // Obtener detalles de cada vuelo referenciado
      const vuelosDetalle = await Promise.all(
        vuelosComprados.map(async (vueloRef) => {
          const vueloDoc = await vueloRef.get(); // Obtener detalles del vuelo
          return { id: vueloDoc.id, ...vueloDoc.data() }; // Retornar ID y datos del vuelo
        })
      );
  
      return res.status(200).json(vuelosDetalle); // Retornar detalles de los vuelos
    } catch (error) {
      console.error('Error al obtener vuelos comprados:', error);
      return res.status(500).send('Error al obtener los vuelos comprados');
    }
  };

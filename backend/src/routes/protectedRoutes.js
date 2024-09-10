const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

// Ruta protegida que requiere autenticación
router.get('/profile', verifyToken, (req, res) => {
  // Aquí puedes acceder a la información del token a través de `req.user`
  const user = req.user;

  res.status(200).json({
    message: 'Profile accessed successfully',
    user: user, // Información del token decodificado
  });
});

module.exports = router;

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;


// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
  // Obtener el token del encabezado de autorización
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({
      message: 'No token provided',
    });
  }

  // Extraer el token del formato "Bearer <token>"
  const token = authHeader.split(' ')[1];

  try {
    // Verificar el token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Agregar la información del token al objeto `req`
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Invalid token',
      error: error.message,
    });
  }
};

module.exports = verifyToken;

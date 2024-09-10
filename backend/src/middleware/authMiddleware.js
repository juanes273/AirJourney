import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET; // Debe coincidir con la clave usada al generar el token

// Middleware para verificar el token JWT
export function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; // Espera el token en el formato "Bearer <token>"

  if (!token) {
    return res.status(401).json({
      message: 'No token provided',
    });
  }

  try {
    const decoded = verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Invalid token',
      error: error.message,
    });
  }
}

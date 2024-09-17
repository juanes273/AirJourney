const express = require('express');
const cors = require('cors'); // Importa cors
const app = express();
const routes = require('./src/routes');
const protectedRoutes = require('./src/routes/protectedRoutes')

// Permitir solicitudes desde cualquier origen
app.use(cors()); // Habilita CORS para todas las rutas

// Usar rutas
app.use(express.json());
app.use('/api', routes);

// Usar rutas protegidas
app.use('/api', protectedRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
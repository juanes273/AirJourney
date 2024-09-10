const express = require('express');
const app = express();
const routes = require('./src/routes');
const protectedRoutes = require('./src/routes/protectedRoutes')


app.use(express.json());
app.use('/api', routes);

// Usar rutas protegidas
app.use('/api', protectedRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

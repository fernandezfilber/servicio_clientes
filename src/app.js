// app.js

// Importar Express y otras librerías
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 1. Importar las rutas desde la carpeta 'src/ROutes'
// La ruta es relativa a 'app.js'
const clienteRoutes = require('./ROutes/clientes.routes'); 

app.use(express.json());

// Usar las rutas importadas
app.use('/api', clienteRoutes); 

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
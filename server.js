const express = require ('express')
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT  || 3000;

// Middleware para que Express entienda el cuerpo de las solicitudes en formato JSON
app.use(express.json());

//ruta inicial
app.get('/', (req,res)=>{
    res.send('Bienvenido');
});

//  importar rutas de productos
const rutas_de_los_productos = require('./routes/productos');
app.use('/api/productos', rutas_de_los_productos);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
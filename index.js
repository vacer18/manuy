const express = require('express');
const routes = require('./routes/index');
const path = require('path');


// Crearando la aplicacion
const app = express();

// Habilitar Pug
app.set('view engine', 'pug');

// Añadir carpeta de vistas
app.set('views', path.join(__dirname,'./views'));


// Usando el archivo de Routes
app.use('/',routes());

// Habilitar un puerto para hacer las pruebas
app.listen(3100);


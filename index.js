const express = require('express');
const routes = require('./routes/index');
const path = require('path');


// Crearando la aplicacion
const app = express();



// Habilitar Pug
app.set('view engine', 'pug');

// Añadir carpeta de vistas
app.set('views', path.join(__dirname,'./views'));


// Cargando archivos estaticos
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static('public'));

// Usando el archivo de Routes
app.use('/',routes());

// Habilitar un puerto para hacer las pruebas
app.listen(3100);


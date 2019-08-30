const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const bodyParser = require('body-parser');

// Helpers con alguans funciones
const helpers = require("./helpers");

// Conexion a la db
const db = require('./config/db');

// Importar models
require('./models/Proveedor');

db.sync().then(() => console.log('Coenexion exitosa al DataBase')).catch((error => console.log(error)));


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

// Pasar var dump a la aplicacion
app.use((req,res,next)=>{
    res.locals.vardump = helpers.vardump;
    next();
});

// Habilitar body Parser leer datos de los formularios
app.use(bodyParser.urlencoded({extended: true}));

// Usando el archivo de Routes
app.use('/',routes());

// Habilitar un puerto para hacer las pruebas
app.listen(9000);


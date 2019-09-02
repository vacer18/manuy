const express = require('express');
const router = express.Router();
// importar express-calidator
const {body} = require("express-validator/check")

// Importando los controladores
const homeController = require('../controllers/homeController');
const proveedorController = require('../controllers/proveedorController');
const kardexController = require('../controllers/kardexController');

module.exports = function () {
    // Redirecciona Home Page
    router.get('/', homeController.homeManuy);
    router.get('/kardex', kardexController.kardex);
    router.post('/proveedor/nuevoProveedor',
        body("nombreProveedor").not().isEmpty().trim().escape(), 
        proveedorController.nuevoProveedor);
    router.post('/kardexResumen',kardexController.kardexResumen);
    router.get('/proveedor/:url', proveedorController.proveedorURL);
    router.post('/proveedor/editar/:id',
        body("nombreProveedor").not().isEmpty().trim().escape(), 
        proveedorController.editarProveedor);


   

    return router;
    
}
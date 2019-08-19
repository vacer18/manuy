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
    router.post('/nuevoProveedor',
        body("nombreProveedor").not().isEmpty().trim().escape(), 
        proveedorController.nuevoProveedor);
   

    return router;
    
}
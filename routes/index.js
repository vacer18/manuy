const express = require('express');
const router = express.Router();

// Importando los controladores
const homeController = require('../controllers/homeController');
const proveedorController = require('../controllers/proveedorController');

module.exports = function () {
    // Redirecciona Home Page
    router.get('/', homeController.homeManuy);
<<<<<<< HEAD

    // View nuevo Proveedor
    router.get('/resumen-proveedores', proveedorController.resumenProveedores);
=======
    router.get('/kardex', proveedorController.kardex);
>>>>>>> ff26ecdebe5b0139d978e8e4774c9921a18a4ab6
   

    return router;
    
}
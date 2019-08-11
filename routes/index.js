const express = require('express');
const router = express.Router();

// Importando los controladores
const homeController = require('../controllers/homeController');
const proveedorController = require('../controllers/proveedorController');

module.exports = function () {
    // Redirecciona Home Page
    router.get('/', homeController.homeManuy);

    // View nuevo Proveedor
    router.get('/resumen-proveedores', proveedorController.resumenProveedores);
   

    return router;
    
}
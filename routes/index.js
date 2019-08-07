const express = require('express');
const router = express.Router();

// Importando los controladores
const homeController = require('../controllers/homeController');
const proveedorController = require('../controllers/proveedorController');

module.exports = function () {

    router.get('/', homeController.homeManuy);
    router.get('/kardex', proveedorController.kardex);
   

    return router;
    
}
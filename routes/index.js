const express = require('express');
const router = express.Router();

// Importando los controladores
const homeController = require('../controllers/homeController');

module.exports = function () {

    router.get('/', homeController.homeManuy);
   

    return router;
    
}
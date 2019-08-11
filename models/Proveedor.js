const Sequelize = require('sequelize');
const db = require('../config/db');

const Proveedor = db.define('proveedor',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre : Sequelize.STRING,
    deuda : Sequelize.INTEGER,
    amortizacion: Sequelize.INTEGER,
    saldo: Sequelize.INTEGER,
    url: Sequelize.STRING,
    estado: Sequelize.INTEGER(1),

});

module.exports = Proveedor;
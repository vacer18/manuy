const Sequelize = require('sequelize');
const db = require('../config/db');
const slug = require("slug");
const shortid = require("shortid");

const Proveedor = db.define('proveedor',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombreProveedor : Sequelize.STRING,
    deuda : Sequelize.INTEGER,
    amortizacion: Sequelize.INTEGER,
    saldo: Sequelize.INTEGER,
    url: Sequelize.STRING,
    estado: Sequelize.INTEGER(1),

},{
    hooks:{
        beforeCreate(proveedor){
            const estado = 1;
            const url = slug(proveedor.nombreProveedor).toLowerCase();
            proveedor.url = `${url}-${shortid.generate()}`;
            proveedor.estado = estado;
        }
    }
});

module.exports = Proveedor;
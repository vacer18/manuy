const Proveedor = require("../models/Proveedor");

exports.homeManuy = async (req,res) =>{

    const proveedores = await Proveedor.findAll();

    res.render('home',{
        namePage: 'MANUY | Home',
        titulePage: 'Resumene - EF Systemas',
        proveedores 
    });

};



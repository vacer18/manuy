const Proveedor = require("../models/Proveedor");

exports.homeManuy = async (req,res) =>{

    const proveedores = await Proveedor.findAll({where:{estado:1}});

    res.render('home',{
        namePage: 'MANUY | Home',
        titulePage: 'Resumene - EF Systemas',
        proveedores 
    });

};



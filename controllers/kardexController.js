const Proveedor = require("../models/Proveedor");

exports.kardex = async (req,res) => {

    const proveedores = await Proveedor.findAll();

    res.render('kardex',{
        namePage: 'MANUY | KARDEX',
        titlePage : "KARDEX",
        proveedores
    });

    
};

exports.kardexResumen = async(req,res) =>{

    const proveedores = await Proveedor.findAll();
    const data = new Object();
    data.data=proveedores;
    res.json(data);
   

};
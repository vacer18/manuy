const Proveedor = require("../models/Proveedor");



exports.nuevoProveedor = async (req,res) =>{
    
    const { nombreProveedor } = req.body;

    let errores = [];

    if (!nombreProveedor) {
        errores.push({mensaje: "Agregar un nombre al Proveedor"});
    }

    // Si hay errores 
    if (errores.length>0) {
        res.render("kardex",{
            namePage: 'MANUY | KARDEX',
            titlePage : "KARDEX",
            errores

        })
        
    }else{
        
        const proveedor = await Proveedor.create({nombreProveedor});
        res.redirect("/kardex");
            

    }



}
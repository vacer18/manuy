const Proveedor = require("../models/Proveedor");



exports.nuevoProveedor = async (req,res) =>{

    const proveedores = await Proveedor.findAll();
    
    const { nombreProveedor } = req.body;

    let errores = "";

    if (!nombreProveedor) {
        errores="Agregar un nombre al Proveedor";
    }

    

    // Si hay errores 
    if (errores.length>0) {
        
        res.status(200).json({mensaje: errores, estado: false})
        
    }else{
        
       await Proveedor.create({nombreProveedor});
       const proveedor =  await Proveedor.findOne({
        where:{
            nombreProveedor : nombreProveedor
        }
        });

        res.status(200).json({
            message: 'Se agrego correctamente',
            url : proveedor.url,
            estado: true
            
        });

    }



}

exports.proveedorURL= async(req,res,next) => {
    const proveedores = await Proveedor.findAll();
    const proveedor =  await Proveedor.findOne({
        where:{
            url : req.params.url
        }
    });

    if (!proveedor) return next();
    
    res.render('ProveedorView',{
        namePage: `MANUY | ${proveedor.nombreProveedor}`,
        titlePage : proveedor.nombreProveedor,
        proveedor,
        proveedores

    })

};
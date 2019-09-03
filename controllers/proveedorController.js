const Proveedor = require("../models/Proveedor");



exports.nuevoProveedor = async (req,res) =>{

    await Proveedor.findAll({where:{estado:1}});
    
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
    const proveedoresPromise = Proveedor.findAll({where:{estado:1}});
    const proveedorPromise =   Proveedor.findOne({
        where:{
            url : req.params.url
        }
    });

    const [proveedores, proveedor] = await Promise.all([proveedoresPromise, proveedorPromise]); 

    if (!proveedor) return next();
    
    res.render('ProveedorView',{
        namePage: `MANUY | ${proveedor.nombreProveedor}`,
        titlePage : proveedor.nombreProveedor,
        proveedor,
        proveedores

    })

};

exports.editarProveedor = async(req,res,next) =>{
    
    const {nombreProveedor} = req.body;

    let errores = "";

    if (!nombreProveedor) {
        errores="Agregar un nuevo nombre al Proveedor";
    }

    
    // Si hay errores 
    if (errores.length>0) {
        
        res.status(200).json({mensaje: errores, estado: false})
        
    }else{
        
       await Proveedor.update({nombreProveedor:nombreProveedor},{where:{id: req.params.id}});
      

        res.status(200).json({
            message: 'Se modifico correctamente',
            estado: true
        });

    }


};
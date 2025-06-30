import sendersModel from "../models/SendersModel.js";

//mostrar todos los registros
export const getAllSenders = async (req , res) => {
    try{
        const senders = await sendersModel.findAll({
            order: [
                ['id', 'ASC'] // Orden ascendente por el campo 'id'
            ]
        });
        res.json(senders)
    } catch (error) {
        res.status(400).json( {message: error.message})
    }
}

//mostrar un registro
export const getSender = async (req,res) => {
    try {
        const sender = await sendersModel.findAll({
            where: {id: req.params.id}            
        });        
        res.json(sender[0]);
    }catch (error){
        res.status(400).json({message: error.message})
    }
}

//mostrar un registro por DNI
export const getSenderByDni = async (req,res) => {
    try {
        const sender = await sendersModel.findAll({
            where: {dni_remitente: req.params.dni_remitente}            
        });        
        res.json(sender[0]);
    }catch (error){
        res.status(400).json({message: error.message})
    }
}

//validar si un registro existe por DNI
export const validateSenderByDni = async (req, res) => {
    //const { dni } = ;
    const sender = await sendersModel.findOne({ 
        where: { dni_remitente: req.params.dni_remitente } });
    if (sender) {
        return res.status(200).json({ exists: true });
    }
    res.status(200).json({ exists: false });
};


//Crear un registro
export const createSender = async (req,res) =>{
    try {
        if(
            !req.body.dni_remitente ||
            !req.body.nombre_remitente ||
            !req.body.apellido_remitente  ||
            !req.body.direccion_remitente ||
            !req.body.telefono_remitente  ||
            !req.body.ciudad_remitente    
        ) {            
            return res.status(400).json({
                message: 'Ingresa los campos requeridos',
            });            
        }
        await sendersModel.create(req.body)
        res.json({
            message : 'Registro Creado correctamente!'
        })

    } catch (error){
        console.log('error',req.body.dni_remitente)
        res.status(400).json({message: error.message})
    }
}

//Actualizar un resgistro
export const updateSender = async (req,res)=>{
    try{
        if(
            !req.body.dni_remitente ||
            !req.body.nombre_remitente ||
            !req.body.apellido_remitente  ||
            !req.body.direccion_remitente ||
            !req.body.telefono_remitente  ||
            !req.body.ciudad_remitente    ||
            req.body.activo=== undefined
        ) {            
            return res.status(400).json({
                message: 'Ingresa los campos requeridos',
            });            
        }
        await sendersModel.update(req.body, {
            where : {id: req.params.id}
        })
        res.json({
            message : 'Registro Actualizado correctamente!'
        })
    } catch (error){
        res.status(400).json({message: error.message})
    }
}




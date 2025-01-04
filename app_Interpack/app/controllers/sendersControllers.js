import sendersModel from "../models/SendersModel.js";

//mostrar todos los registros
export const getAllSenders = async (req , res) => {
    try{
        const senders = await sendersModel.findAll();
        res.json(senders)
    } catch (error) {
        res.json( {message: error.message})
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
        res.json({message: error.message})
    }
}

//Crear un registro
export const createSender = async (req,res) =>{
    try {
        await sendersModel.create(req.body)
        res.json({
            message : 'Registro Creado correctamente!'
        })

    } catch (error){
        res.json({message: error.message})
    }
}

//Actualizar un resgistro
export const updateSender = async (req,res)=>{
    try{
        await sendersModel.update(req.body, {
            where : {id: req.params.id}
        })
        res.json({
            message : 'Registro Actualizado correctamente!'
        })
    } catch (error){
        res.json({message: error.message})
    }
}




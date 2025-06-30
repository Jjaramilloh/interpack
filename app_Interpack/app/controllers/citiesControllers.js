import citiesModel from "../models/citiesModel.js";
import { Sequelize,Op } from "sequelize";

//mostrar todos los registros de canada
export const getAllCities = async (req , res) =>{
    try{
        const cities = await citiesModel.findAll({
            attributes:{
                exclude : ['createdAt','updatedAt']
            },
            where :{
                pais:'Canada'
            }
        })
        res.json(cities)
    }catch (error){
        res.status(400).json( {message: error.message})
    }
}

//mostrar registro por ciudad LIKE
export const getCityByName = async (req, res) => {
    try {
        const city = await citiesModel.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            where: {
                ciudad: {
                    [Op.iLike]:`%${req.params.ciudad}%` 
                },
                pais: 'Canada' 
            }
        });
        if (city.length > 0) {
            res.json(city);
        } else {
            res.status(404).json({ message: 'Ciudad no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//mostrar registro por ciudad FULL
export const getCityByNameFull = async (req, res) => {
    
        const city = await citiesModel.findOne({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            where: {
                ciudad: {[Op.iLike]:req.params.ciudad},
                pais: 'Canada' 
            }
        });       
            
        if (city) {
                return res.status(200).json({ exists: true });
        }
        res.status(200).json({ exists: false });
};
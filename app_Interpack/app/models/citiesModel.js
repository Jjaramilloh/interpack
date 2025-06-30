import dotenv from 'dotenv'
import { DataTypes } from 'sequelize'
import db from '../../config/database.js'

dotenv.config();

const citiesModel = db.define('vista_ciudades',{
        ciudad:{type: DataTypes.STRING},
        departamento:{type: DataTypes.STRING}, 
        pais:{type: DataTypes.STRING}  
    },
    {
        timestamp:false,
        //createdAt: 'fecha_creacion', // Nombre personalizado para "createdAt"
        //updatedAt: 'fecha_actualizacion', // Nombre personalizado para "updatedAt"
    }
)

export default citiesModel;
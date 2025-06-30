import dotenv from 'dotenv';
import {DataTypes} from 'sequelize';

dotenv.config();

import db from '../../config/database.js';
//import { type } from 'pg';

const sendersModel = db.define('remitentes',{
    dni_remitente : {type: DataTypes.STRING},
    nombre_remitente : {type: DataTypes.STRING},
    apellido_remitente : {type: DataTypes.STRING},
    direccion_remitente : {type: DataTypes.STRING},
    telefono_remitente : {type: DataTypes.STRING},
    ciudad_remitente : {type: DataTypes.STRING},
    activo : {type:DataTypes.BOOLEAN}
    },
    {
        timestamp:true,
        createdAt: 'fecha_creacion', // Nombre personalizado para "createdAt"
        updatedAt: 'fecha_actualizacion', // Nombre personalizado para "updatedAt"
    }
)

export default sendersModel;
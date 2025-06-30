// import dotenv from 'dotenv';
// import path from 'path';
// import Sequelize from 'sequelize';

// // Usar import.meta.url para obtener la ruta del directorio actual
// //const __filename = new URL(import.meta.url).pathname;
// //const __dirname = path.dirname(__filename);

// // Especificar la ruta del archivo .env
// //dotenv.config({ path: path.resolve( '../.env') });

// const db = new Sequelize('interpack', 'user_interpack', 'Adm1n2024*', {
//     host: 'localhost',
//     port: '5432',
//     dialect: 'postgres' ,

//   });

// // Conexion con la base de datos
// // const db = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
// //   host: process.env.HOST,
// //   port: process.env.PORT_DB,
// //   dialect: 'postgres' ,
// // //   dialectOptions: {
// // //     ssl: {
// // //       require: true,
// // //       rejectUnauthorized: false // Asegúrate de tener certificados configurados si cambias esto a true
// // //     }
// // //   }
// // });

// try {
//     await db.authenticate();
//     console.log('Connection has been established successfully.');
//    }catch (error) {
//     console.error('Unable to connect to the database:', error);    
// }

//   export default db;

import Sequelize from 'sequelize';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Conexión con la base de datos usando las variables de entorno
const db = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  // Descomenta las siguientes líneas si necesitas habilitar SSL (AWS)
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false // Asegúrate de tener certificados configurados si cambias esto a true
//     }
//   }
});

// Probar la conexión
// try {
//   await db.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

export default db;

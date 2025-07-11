import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routeSenders from './app/routes/routeSenders.js';
import routeCities from './app/routes/routeCities.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.use('/senders',routeSenders)
app.use('/cities',routeCities)

app.get('/api', (req, res)=>{
    res.json({message: "Hola desde el backend"})
});

// try {
//     await db.authenticate();
//     console.log('Connection has been established successfully.');
//    }catch (error) {
//     console.error('Unable to connect to the database:', error);  
//     console.log(process.env.PASSWORD)  
// }

app.listen(PORT,  () =>{
    console.log(`Server running on http://localhost:${PORT}`)
});


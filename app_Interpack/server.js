import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res)=>{
    res.json({message: "Hola desde el backend"})
});

app.listen(PORT, '0.0.0.0', () =>{
    console.log(`Server running on http://0.0.0.0:${PORT}`)
});
import express from 'express';
import { getAllSenders,getSender , createSender, updateSender} from '../controllers/sendersControllers.js';

const routeSenders = express.Router();

routeSenders.get('/',getAllSenders);
routeSenders.get('/:id', getSender);
routeSenders.post('/',createSender);
routeSenders.put('/:id',updateSender);

export default routeSenders;
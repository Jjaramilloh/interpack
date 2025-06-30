import express from 'express';
import { getAllSenders,getSender , getSenderByDni ,validateSenderByDni, createSender, updateSender} from '../controllers/sendersControllers.js';

const routeSenders = express.Router();

routeSenders.get('/',getAllSenders);
routeSenders.get('/:id', getSender);
routeSenders.get('/remitente/:dni_remitente', getSenderByDni);
routeSenders.get('/valida_remitente/:dni_remitente', validateSenderByDni);
routeSenders.post('/',createSender);
routeSenders.put('/:id',updateSender);

export default routeSenders;
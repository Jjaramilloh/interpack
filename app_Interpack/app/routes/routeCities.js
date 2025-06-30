import express from 'express'
import { getAllCities, getCityByName, getCityByNameFull } from '../controllers/citiesControllers.js';

const routeCities  = express.Router()

routeCities.get('/',getAllCities);
routeCities.get('/city/:ciudad',getCityByName);
routeCities.get('/city2/:ciudad',getCityByNameFull)

export default routeCities
import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import Motorcycle from '../models/Motorcycle';
import MotorcycleService from '../services/Motorcycle';

const route = Router();

const motorcycle = new Motorcycle();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

route.post('/motorcycles', (req, res) => motorcycleController.create(req, res));

export default route;
import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import Motorcycle from '../models/Motorcycle';
import MotorcycleService from '../services/Motorcycle';

const route = Router();

const motorcycle = new Motorcycle();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

const motorcycleId = '/motorcycles/:id';

route.post('/motorcycles', (req, res) => motorcycleController.create(req, res));
route.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
route.get(motorcycleId, (req, res) => motorcycleController.readOne(req, res));
route.put(motorcycleId, (req, res) => motorcycleController.update(req, res));
route.delete(motorcycleId, (req, res) => motorcycleController.delete(req, res));

export default route;

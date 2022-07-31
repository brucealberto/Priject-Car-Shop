import { Router } from 'express';
import CarController from '../controllers/CarController';
import Car from '../models/Cars';
import CarService from '../services/CarService';

const route = Router();

const car = new Car();
const carService = new CarService(car);
const carController = new CarController(carService);

route.post('/cars', (req, res) => carController.create(req, res));
route.get('/cars/:id', (req, res) => carController.readOne(req, res));
export default route;
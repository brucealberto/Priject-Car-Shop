import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carsMongooseSchema = new Schema<ICar>(
  {
    buyValue: Number,
    color: String,
    doorsQty: Number,
    model: String,
    seatsQty: Number,
    year: Number,
  },
  { versionKey: false },
);

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carsMongooseSchema)) {
    super(model);
  }
}

export default Car;

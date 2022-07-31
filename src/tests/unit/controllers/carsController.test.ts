import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/Cars';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { Model } from 'mongoose';
import { carsMock, carsMockWithId } from '../../mocks/carsMock';
import { Request, Response } from 'express';
const { expect } = chai;

describe('Cars Controller', () => {
  const carsModel = new Car();
  const carService = new CarService(carsModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;
  before(async () => {
    sinon.stub(Model, 'create').resolves(carsMock);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  it('Created Car', async () => {
    req.body = carsMock;
    await carController.create(req, res);
    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carsMock)).to.be.true;
  });
});

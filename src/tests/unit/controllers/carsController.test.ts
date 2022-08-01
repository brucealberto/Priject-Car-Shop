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
    sinon.stub(carService, 'create').resolves(carsMockWithId);
    sinon.stub(carService, 'update').resolves(carsMockWithId);
    sinon.stub(carService, 'readOne').resolves(carsMockWithId);

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
    expect((res.json as sinon.SinonStub).calledWith(carsMockWithId)).to.be.true;
  });

  it('Found Car', async () => {
    req.params = { id: carsMockWithId._id };
    await carController.readOne(req, res);
    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carsMockWithId)).to.be.true;
  });

  it('Updated Car', async () => {
    req.params = { id: carsMockWithId._id };
    req.body = carsMock;
    await carController.update(req, res);
    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carsMockWithId)).to.be.true;
  });
});

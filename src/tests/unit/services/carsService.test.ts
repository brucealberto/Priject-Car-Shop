import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/Cars';
import CarService from '../../../services/CarService';
import { Model } from 'mongoose';
import { carsMock, carsMockWithId } from '../../mocks/carsMock';
import { ZodError } from 'zod';
const { expect } = chai;

describe('Cars Service', () => {
  const carsModel = new Car();
  const carsService = new CarService(carsModel);

  before(async () => {
    sinon.stub(Model, 'create').resolves(carsMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  it('Created', async () => {
    const car = await carsService.create(carsMock);
    expect(car).to.be.equal(carsMockWithId);
  });

  it('Not Created', async () => {
    try {
      await carsService.create({} as any);
    } catch (error) {
      expect(error).to.be.instanceOf(ZodError);
    }
  });
});

import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/Cars';
import { Model } from 'mongoose';
import { carsMock } from '../../mocks/carsMock';
const { expect } = chai;

describe('Cars Model', () => {
  const carsModel = new Car();
  before(async () => {
    sinon.stub(Model, 'create').resolves(carsMock);
  });

  after(() => {
    sinon.restore();
  });

  it('create with sucess', async () => {
    const car = await carsModel.create(carsMock);
    expect(car).to.be.deep.eq(carsMock);
  });
});

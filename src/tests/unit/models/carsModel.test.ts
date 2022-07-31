import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/Cars';
import { Model } from 'mongoose';
import { allCarsMock, carsMock, carsMockWithId, updatedCarsMock, updatedCarsMockWithId } from '../../mocks/carsMock';
const { expect } = chai;

describe('Cars Model', () => {
  const carsModel = new Car();
  before(async () => {
    sinon.stub(Model, 'create').resolves(carsMockWithId);
    sinon.stub(Model, 'findOne').resolves(carsMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCarsMockWithId);
    sinon.stub(Model, 'find').resolves(allCarsMock);
    sinon.stub(Model, 'findOneAndRemove').resolves(updatedCarsMockWithId)
  });

  after(() => {
    sinon.restore();
  });

  it('create car with sucess', async () => {
    const carCreate = await carsModel.create(carsMock);
    expect(carCreate).to.be.deep.equal(carsMockWithId);
  });

  it('found car', async () => {
    const carFound = await carsModel.readOne('5edd40c86762e0fb12000005');
    expect(carFound).to.be.deep.equal(carsMockWithId);
  });

  it('car not found', async () => {
    try {
      await carsModel.readOne('wrong Id')
    } catch (error: any) {
      expect(error.message).to.be.eq('InvalidMongoId')
    }
  });

  it('car updated', async () => {
    const carUpdated = await carsModel.update('4edd40c86762e0fb12000003', updatedCarsMockWithId)
    expect(carUpdated).to.be.deep.equal(updatedCarsMockWithId);
  });

  it('updated car not found', async () => {
    try {
      await carsModel.update('wrong Id', updatedCarsMock)
    } catch (error: any) {
      expect(error.message).to.be.eq('InvalidMongoId')
    }
  });

  it('all cars', async () => {
    const allCars = await carsModel.read()
    expect(allCars).to.be.deep.equal(allCarsMock);
  });

  it('car removed', async () => {
    const carRemoved = await carsModel.delete('4edd40c86762e0fb12000003')
    expect(carRemoved).to.be.deep.equal(updatedCarsMockWithId);
  });

  it('removed car not found', async () => {
    try {
      await carsModel.delete('wrong Id')
    } catch (error: any) {
      expect(error.message).to.be.eq('InvalidMongoId')
    }
  });
});

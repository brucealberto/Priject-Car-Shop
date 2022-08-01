import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/Cars';
import CarService from '../../../services/CarService';
import { Model } from 'mongoose';
import { carsMock, carsMockWithId } from '../../mocks/carsMock';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalogs';
const { expect } = chai;

describe('Cars Service', () => {
  const carsModel = new Car();
  const carsService = new CarService(carsModel);

  before(async () => {
    sinon.stub(carsModel, 'create').resolves(carsMockWithId);
    sinon.stub(carsModel, 'readOne').onCall(0).resolves(carsMockWithId)
    .onCall(1).resolves(null).onCall(2).resolves(carsMockWithId)
    sinon.stub(carsModel, 'update').resolves(carsMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  it('Created Car', async () => {
    const carCreated = await carsService.create(carsMock);
    expect(carCreated).to.be.equal(carsMockWithId);
  });

  it('Car Not Created', async () => {
    try {
      await carsService.create({} as any);
    } catch (error) {
      expect(error).to.be.instanceOf(ZodError);
    }
  });

  it('Found Car Id', async () => {
    const carFoundId = await carsService.readOne(carsMockWithId._id)
    expect(carFoundId).to.be.deep.equal(carsMockWithId);
  });

  it('Not Found Car Id', async () => {
  try {
      await carsService.readOne(carsMockWithId._id)
    } catch (error:any) {
    expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
  }
  });

  it('Updated Car', async () => {
    const carUpdated = await carsService.update('4edd40c86762e0fb12000003', carsMock)
    expect(carUpdated).to.be.deep.equal(carsMockWithId);
  });


});

import { ICar } from '../../interfaces/ICar';

const carsMock: ICar = {
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
};

const carsMockWithId: ICar & { _id: string } = {
  _id: '4edd40c86762e0fb12000003',
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
};

const updatedCarsMock: ICar = {
  model: 'Gol',
  year: 2001,
  color: 'green',
  buyValue: 1000000,
  seatsQty: 4,
  doorsQty: 4,
};

const updatedCarsMockWithId: ICar & { _id: string } = {
  _id: '4edd40c86762e0fb12000003',
  model: 'Gol',
  year: 2001,
  color: 'green',
  buyValue: 1000000,
  seatsQty: 4,
  doorsQty: 4,
};

const allCarsMock: ICar[] & { _id: string }[] = [
  {
    _id: '4edd40c86762e0fb12000003',
    model: 'Ferrari Maranello',
    year: 1963,
    color: 'red',
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2,
  },
  {
    _id: '4edd40c86762e0fb12000003',
    model: 'Gol',
    year: 2001,
    color: 'green',
    buyValue: 1000000,
    seatsQty: 4,
    doorsQty: 4,
  },
];

export {
  carsMock,
  carsMockWithId,
  updatedCarsMock,
  updatedCarsMockWithId,
  allCarsMock,
};

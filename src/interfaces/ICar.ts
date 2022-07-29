import { z } from 'zod';

// import { IVehicle } from './IVehicle';

// export interface ICar extends IVehicle{

// }

const CarZodSchema = z.extend(
  {
    doorsQty: z.number().gte(2).lte(4),
    seatsQty: z.number().gte(2).lte(7),
  },
);

type ICar = z.infer<typeof CarZodSchema>;
export { ICar, CarZodSchema };

const DogWithBreed = Dog.extend({
  breed: z.string(),
});
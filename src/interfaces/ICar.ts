import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

type ICar = z.infer<typeof CarZodSchema>;
export { ICar, CarZodSchema };

// all properties are required by default
// const Dog = z.object({
//   name: z.string(),
//   age: z.number(),
// });

// // extract the inferred type like this
// type Dog = z.infer<typeof Dog>;

// // equivalent to:
// type Dog = {
//   name: string;
//   age: number;
// };
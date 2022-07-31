import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotorCycleSchema = VehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().positive().lte(2500),
});

type IMotorcycle = z.infer<typeof MotorCycleSchema>;
export { IMotorcycle, MotorCycleSchema };
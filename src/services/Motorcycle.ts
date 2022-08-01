import { ErrorTypes } from '../errors/catalogs';
import { IModel } from '../interfaces/IModel';
import { IMotorcycle, MotorcycleSchema } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

export default class MotorcycleService implements IService<IMotorcycle> {
  private _moto: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._moto = model;
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    const parsed = MotorcycleSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._moto.create(obj);
  }

  public async read(): Promise<IMotorcycle[]> {
    return this._moto.read();
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const moto = await this._moto.readOne(_id);
    if (!moto) throw new Error(ErrorTypes.ObjectNotFound);
    return moto;
  }

  public async update(
    _id: string,
    obj: IMotorcycle,
  ): Promise<IMotorcycle | null> {
    const parsed = MotorcycleSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    await this.readOne(_id);
    return this._moto.update(_id, obj);
  }

  public async delete(_id: string): Promise<IMotorcycle | null> {
    return this._moto.delete(_id);
  }
}

import { FilterQuery, Model, UpdateQuery, Document } from 'mongoose';

export abstract class EntityRepository<T extends Document> {

  constructor(protected readonly entityModel: Model<T>) { }

  public async create(createEntityDto: any): Promise<T | null> {
    const entity = new this.entityModel(createEntityDto);
    return await entity.save();
  }

  public async findOne(entityFilterQuery: FilterQuery<T>): Promise<T | null> {
    return await this.entityModel.findOne(entityFilterQuery).exec();
  }

  public async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
    return await this.entityModel.find(entityFilterQuery).exec();
  }

  public async findOneAndUpdate(entityFilterQuery: FilterQuery<T>, updateEntityData: UpdateQuery<any>): Promise<T | null> {
    return await this.entityModel.findOneAndUpdate(entityFilterQuery, updateEntityData, {new: true}).exec();
  }

  public async findOneAndDelete(entityFilterQuery: FilterQuery<T | null>){
    return await this.entityModel.findOneAndDelete(entityFilterQuery).exec()
  }

  public async deleteMany(entityFilterQuery: FilterQuery<T>): Promise<number> {
    const result = await this.entityModel.deleteMany(entityFilterQuery).exec();
    return result.deletedCount;
  }

  public async updateMany(entityFilterQuery: FilterQuery<T>, updateEntityData: UpdateQuery<any>): Promise<number> {
    const result = await this.entityModel.updateMany(entityFilterQuery, updateEntityData).exec();
    return result.modifiedCount;
  }


}

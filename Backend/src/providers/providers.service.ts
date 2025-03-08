import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Provider, ProviderDocument } from '../schemas/provider.schema';

@Injectable()
export class ProvidersService {
  constructor(@InjectModel(Provider.name) private providerModel: Model<ProviderDocument>) {}

  async create(provider: Provider): Promise<Provider> {
    const newProvider = new this.providerModel(provider);
    return newProvider.save();
  }

  async findAll(): Promise<Provider[]> {
    return this.providerModel.find().exec();
  }

  async findOne(id: number): Promise<Provider> {
    return this.providerModel.findOne({ id }).exec();
  }

  async update(id: number, updateData: Partial<Provider>): Promise<Provider> {
    return this.providerModel.findOneAndUpdate({ id }, updateData, { new: true }).exec();
  }

//   async delete(id: string): Promise<Provider> {
//     return this.providerModel.findByIdAndDelete( id ).exec();
//   }
    async delete(id: string){
        return this.providerModel.findByIdAndDelete(id).exec();
    }

}
